import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://twineagletech.com"),
  title: {
    default: "Twin Eagle",
    template: "%s | Twin Eagle",
  },
  description:
    "Twin Eagle Technologies connects international clients with Kosovo-based IT, support, operations, and software talent. Save 50%+ on staffing costs with a free replacement Coverage Guarantee.",
  openGraph: {
    title: "Twin Eagle",
    description: "Kosovo-based IT services, support, staffing, and software talent for international teams.",
    url: "https://twineagletech.com",
    siteName: "Twin Eagle Technologies",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/twin-eagle-logo.png",
    apple: "/twin-eagle-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
