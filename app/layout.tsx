import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0B0D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shailendra Sharma | Software Engineer",
  description:
    "Portfolio of Shailendra Sharma, Software Engineer building web applications, production-ready REST APIs, and scalable data-driven systems with Node.js, Express.js, TypeScript, and SQL databases.",
  keywords: [
    "Shailendra Sharma",
    "Software Engineer",
    "Node.js Developer",
    "Express.js",
    "TypeScript",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "Sequelize ORM",
    "Microservices",
    "Bharatpur",
    "Rajasthan",
    "India",
  ],
  authors: [{ name: "Shailendra Sharma" }],
  creator: "Shailendra Sharma",
  openGraph: {
    title: "Shailendra Sharma | Software Engineer",
    description: "Engineering the systems behind great digital experiences.",
    siteName: "Shailendra Sharma Portfolio",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col text-[#FFFFFF] antialiased">
        {children}
      </body>
    </html>
  );
}
