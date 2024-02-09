import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        limeGreen: "#C2EFD4",
        mediumGreen: "#267D49",
        darkGreen: "#224F34",
        darkGrey: "#373737",
        secondaryGrey: "#454545",
      },
      fontSize: {
				clampHeading: "clamp(48px, 6vw, 86px)",
				clampHeading2: "clamp(40px, 5vw, 64px)",
				'16': ['16px', '25px'],
        '19': ['19px', '36px'],
				'30': ['30px', '40px'],
        '32': ['32px', '40px'],
				'86': ['86px', '100px'],
				'24': ['24px', '50px'],
        '23': ['23px', '33px'],
        '20': ['20px', '30px'],
        '22': ['22px', '52px'],
        '40': ['40px', '50px'],
        '46': ['46px', '60px'],
				'100': ['100px', '135px'],
			  },
        fontFamily: {
          roboto: ['var(--font-roboto)'],
          rufina: ['var(--font-rufina)'],
          poppins: ['var(--font-poppins)'],
        },
        lineHeight: {
          tight: '1.00',
          normal: '1.15',
          custom: '1.5',
        },
        screens: {
          tiny: '279x',
          mb: '429px',
          tb: '768px',
          sm: '1024px',
          sd: '1280px',
          md: '1366px',
          lg: '1440px',
          xl: '1920px',
          xxl: '2000px'
        },
    },
  },
  plugins: [],
};
export default config;
