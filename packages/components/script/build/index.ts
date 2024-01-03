import delPath from '../utils/delpath'
import { series, parallel, src, dest } from 'gulp'
import { pkgPath, componentPath } from '../utils/paths'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from '../utils/run'

export const removeDist = () => {
  return delPath(`${pkgPath}/vorangeui`)
}

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/vorangeui/lib/src`))
    .pipe(dest(`${pkgPath}/vorangeui/es/src`))
}

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export const buildFont = async () => {
  return src(`${componentPath}/assets/font/**`)
    .pipe(dest(`${pkgPath}/vorangeui/lib/assets/font`))
    .pipe(dest(`${pkgPath}/vorangeui/es/assets/font`))
}
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildFont(),
    async () => buildComponent()
  )
)
