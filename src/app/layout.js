import Header from "../../components/header";
import Navbar from "../../components/navbar";
import "./globals.css";
import { Stick_No_Bills } from "next/font/google";

const inter = Stick_No_Bills({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white bg-gradient-to-l from-black/50 text-black dark:bg-black dark:from-white/50 dark:text-white`}
      >
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
