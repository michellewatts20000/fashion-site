import { Inter, Poppins, Roboto_Slab, Rufina } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });


export const roboto = Roboto_Slab({
  weight: ['300','400', '500', '600'],
    variable: '--font-roboto',
    display: 'swap',
    preload: false,
  });

export const poppins = Poppins({
    weight: ['300','400', '500', '600'],
    preload: false,
    display: 'swap',
    variable: '--font-poppins',
  });

  export const rufina = Rufina({
    weight: '700',
    preload: false,
    display: 'swap',
    variable: '--font-rufina',
  });