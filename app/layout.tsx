import { ClerkProvider, currentUser } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import Footer from "@/components/Store/Footer";
import MainNav from "@/components/Store/MainNav";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC Palace",
  description: "Computer parts store",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await currentUser()) || undefined;
  let userImage
  if (user) {
    userImage = user.imageUrl
  }
  
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          <MainNav userImage={userImage}/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
