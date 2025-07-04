import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shodlik Hotel",
  description: "A  modern premium hotel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratSans.variable} antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
