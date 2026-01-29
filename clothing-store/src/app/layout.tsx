import "./globals.css";
import { Poppins } from "next/font/google";
import { AppToaster } from "./components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AppToaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
