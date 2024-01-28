import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Bekkstagram",
  description: "Bekkstagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" id="root">
      <Header />
      {children}
    </html>
  );
}
