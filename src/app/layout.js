import AuthProvider from "@/providers/authProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cryptochain",
  description: "Investigate crypto assets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container">
            <Navbar />
            <div className="wrapper">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
