import type { Metadata } from 'next';
import { Noto_Sans_KR, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GAGYEOL — AI 지출결의',
  description: '증빙 기반 양식 자동 작성, 필수 항목 검사, 다단계 결재를 지원하는 AI 지출결의 서비스',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
