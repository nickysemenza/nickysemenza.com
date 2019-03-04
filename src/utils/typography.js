import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'
import TwinPeaks from 'typography-theme-twin-peaks'

TwinPeaks.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete TwinPeaks.googleFonts

const typography = new Typography(TwinPeaks)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
