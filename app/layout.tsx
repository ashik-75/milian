import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Milian",
  description: "Generated by create next app",
  icons: {
    icon: "/leaf.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <main className="min-h-[80vh] p-5">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
