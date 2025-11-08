import { Inter, Space_Grotesk } from "next/font/google";

export const sourceSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const fjalla_one = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fjalla-one",
  weight: ["400", "500", "600", "700"],
});
