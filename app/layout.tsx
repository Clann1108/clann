import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Clann Staffing | India's Premier Staffing & Recruitment Partner",
  description: "Clann Staffing connects exceptional talent with forward-thinking organizations across India. Permanent staffing, contract staffing, executive search, and HR consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
