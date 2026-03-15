import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Adil Muhammed | Portfolio",
  description: "Software Engineer & Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-background text-foreground antialiased selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}