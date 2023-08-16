import Header from "../../components/header";
import Navbar from "../../components/navbar";
import "./globals.css";
import { Stick_No_Bills } from "next/font/google";
import Cursor from "../../components/cursor";
import Footer from "../../components/footer";

const inter = Stick_No_Bills({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Emre Ates",
  description: "Generated by ♥ Emre Ates",
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
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
