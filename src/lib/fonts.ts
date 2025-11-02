import localFont from 'next/font/local'

export const brockman = localFont({
  src: [
    {
      path: '../../public/brockmann-medium-webfont.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-brockman'
})