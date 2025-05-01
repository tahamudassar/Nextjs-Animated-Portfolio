import { Inter } from "next/font/google";
import "./globals.css";
import TransitionComponent from "@/components/TransitionComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AstroApe",
  description: "At AstroApe, we don’t just build software — we launch it into orbit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-200">
        <Navbar/>
        {children}
        </div> */}
        <TransitionComponent>{children}</TransitionComponent>
        </body>
    </html>
  );
}
