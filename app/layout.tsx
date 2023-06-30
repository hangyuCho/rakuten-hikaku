import "./globals.css";
import { Inter } from "next/font/google";
import "../public/static/fonts/style.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "rakuten travel compare app",
  description: "compare for travel area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
