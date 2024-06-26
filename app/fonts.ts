import { Source_Sans_3, Fjalla_One } from "next/font/google";
 
export const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans"
});

export const fjalla_one = Fjalla_One({ 
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fjalla-one"
});
