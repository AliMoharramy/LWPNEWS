import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../app/globals.css";
import Footer from "../../ui/main page/footer";
import Header from "../../ui/main page/header";
import { getSession, logout } from "@/lib/lib";
import LogOut from "@/app/ui/main page/logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const islogin = session ? true : false;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={islogin} data={session?.user}>
          <LogOut />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
