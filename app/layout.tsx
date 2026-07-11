import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mission.bnblab.co.kr"),
  title: "BNB Lab — 말씀·부흥·선교·문화",
  description:
    "말씀에 뿌리를 두고, 부흥과 선교의 기억을 보존하며, 오늘의 문화로 복음을 다음 세대와 세계에 이어 가는 BNB Lab입니다.",
  openGraph: {
    title: "BNB Lab — 복음의 기억을 다음 시대로",
    description: "말씀에 뿌리내리고, 부흥과 선교를 기억하며, 오늘의 문화로 복음을 이어 갑니다.",
    url: "https://mission.bnblab.co.kr/",
    siteName: "BNB Lab Mission",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/gallery/mission-underwood.jpg", width: 1200, height: 630, alt: "BNB Lab 말씀·부흥·선교·문화" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BNB Lab — 복음의 기억을 다음 시대로",
    description: "말씀에 뿌리내리고, 부흥과 선교를 기억하며, 오늘의 문화로 복음을 이어 갑니다.",
    images: ["/gallery/mission-underwood.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
