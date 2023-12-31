import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Provider } from "../components/providers/Provider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M A J",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`tracking-wider ${poppins.className}`}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
