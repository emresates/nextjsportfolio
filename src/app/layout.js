import Header from "../../components/header";
import Navbar from "../../components/navbar";
import "./globals.css";
import { Stick_No_Bills } from "next/font/google";
import Cursor from "../../components/cursor";
import Footer from "../../components/footer";

const inter = Stick_No_Bills({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Secenory",
  description:
    "Emre Ates, Frontend Developer based in Turkiye. Explore more about me and my works here.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Home | Secenory",
    description:
      "Emre Ates, Frontend Developer based in Turkiye. Explore more about me and my works here.",
    url: "https://secenory.live/",
    siteName: "Secenory Portfolio",
    type: "website",
    authors: ["Secenory"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  generator: "Secenory",
  applicationName: "Secenory Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Secenory",
    "secenory",
    "emresates",
    "emre ates",
    "Emre Ates",
    "emreates",
    "Emreates",
  ],
  authors: [{ name: "Emre" }, { name: "Ates", url: "https://secenory.live" }],
  creator: "Secenory",
  publisher: "Secenory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-white bg-gradient-to-l from-black/50 text-black dark:bg-black dark:from-white/50 dark:text-white`}
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
