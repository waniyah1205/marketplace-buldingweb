import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  
      backgroundImage:{
        bannerImg: "url('/Rectangle2.png') ",
        blackOverlay:"linear-gradient( to bottom, rgba(0,0,0,0) 0%,  rgba(0,0,0,0.1) 100%)",
        bannerImgTwo:"url('/image11.png') ",
        bannerImgTwoo:"url('/image13.png') ",
        bannerImgThree:"url('/image12.png') ",
        bannerImgFour:"url('/image14.png') ",
        bannerImgFive:"url('/startq.png') ",




      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif','Integral CF'],
      },
     
      

    },
  },
  plugins: [],
} satisfies Config;


