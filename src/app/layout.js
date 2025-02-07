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

export const metadata = {
  title: "Main 페이지", // html 의 타이틀과 같음
  description: "TodoList Management Service", // 메타데이터에 남는 것
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {" "}
      /*한국어로 설정*/
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
