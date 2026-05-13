import { spawnSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const input = resolve(root, 'public', 'cctv-hero.jpg')
const output = resolve(root, 'public', 'cctv-multi-feed.mp4')
const filterFile = resolve(root, 'scripts', 'cctv-video-filter.txt')

const cols = 4
const rows = 3
const tileW = 480
const tileH = 270
const yOffset = 135
const cropPoints = [
  [0, 0], [320, 0], [640, 0], [960, 0],
  [0, 270], [320, 270], [640, 270], [960, 270],
  [0, 540], [320, 540], [640, 540], [960, 540],
]

const factor = "if(between(t,4,7),(t-4)/3,if(between(t,7,10),(10-t)/3,0))"
const splitNames = Array.from({ length: 12 }, (_, i) => `[s${i}]`).join('')
const filters = [
  `[0:v]fps=30,scale=1920:1080,format=rgba,split=12${splitNames}`,
]

for (let i = 0; i < 12; i += 1) {
  const [cropX, cropY] = cropPoints[i]
  const hue = (i % 4) * 0.018
  const brightness = i % 2 === 0 ? 0.02 : -0.02
  filters.push(
    `[s${i}]crop=960:540:${cropX}:${cropY},` +
      `scale=w='640*(1+0.18*min(t/4,1))':h='360*(1+0.18*min(t/4,1))':eval=frame,` +
      `crop=${tileW}:${tileH},` +
      `eq=contrast=1.08:brightness=${brightness}:saturation=1.05,` +
      `hue=h=${hue},noise=alls=7:allf=t+u,` +
      `drawgrid=w=80:h=45:t=1:c=0ea5e9@0.13,` +
      `drawbox=x=0:y=0:w=iw:h=ih:color=0ea5e9@0.5:t=2,` +
      `drawbox=x=14:y=14:w=12:h=12:color=red@0.95:t=fill,` +
      `drawbox=x=34:y=18:w=72:h=4:color=white@0.55:t=fill,` +
      `drawbox=x=iw-116:y=16:w=96:h=5:color=0ea5e9@0.45:t=fill[v${i}]`
  )
}

filters.push(`color=c=06111f:s=1920x1080:d=12:r=30[base]`)

let previous = 'base'
for (let i = 0; i < 12; i += 1) {
  const col = i % cols
  const row = Math.floor(i / cols)
  const baseX = col * tileW
  const baseY = yOffset + row * tileH
  const dx = [-155, -55, 55, 155][col]
  const dy = [-95, 0, 95][row]
  const next = i === 11 ? 'merged' : `m${i}`
  filters.push(
    `[${previous}][v${i}]overlay=` +
      `x='${baseX}+(${dx})*${factor}':` +
      `y='${baseY}+(${dy})*${factor}'[${next}]`
  )
  previous = next
}

filters.push(
  `[merged]drawbox=x=0:y=0:w=iw:h=ih:color=0ea5e9@0.12:t=4,` +
    `drawgrid=w=480:h=270:t=2:c=0ea5e9@0.16,` +
    `fade=t=in:st=0:d=0.25,fade=t=out:st=11.7:d=0.3,format=yuv420p[out]`
)

writeFileSync(filterFile, filters.join(';\n'))

const result = spawnSync('ffmpeg', [
  '-y',
  '-loop', '1',
  '-t', '12',
  '-i', input,
  '-filter_complex_script', filterFile,
  '-map', '[out]',
  '-an',
  '-c:v', 'libx264',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  '-r', '30',
  output,
], { stdio: 'inherit' })

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

console.log(`Generated ${output}`)
