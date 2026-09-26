import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-sans' })
const _geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-mono' })

const SITE_URL = 'https://farocasino16.vercel.app'
const SITE_TITLE = 'Faro Casino — официальный сайт казино Фаро, зеркало для входа, играть онлайн'
const SITE_DESCRIPTION = 'Faro Casino — официальный сайт казино Фаро с рабочим зеркалом для входа. Играть онлайн в слоты, рулетку и live-игры. Бонусы новым игрокам, быстрый вывод средств 24/7.'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'faro casino',
    'faro casino зеркало',
    'faro casino играть',
    'faro casino официальный',
    'faro casino официальный сайт',
    'faro казино',
    'faro казино зеркало',
    'faro казино зеркало рабочее',
    'faro казино играть',
    'faro казино онлайн',
    'faro казино официальный',
    'faro казино официальный сайт',
  ],
  authors: [{ name: 'Faro Casino' }],
  creator: 'Faro Casino',
  publisher: 'Faro Casino',
  formatDetection: { telephone: false, address: false, email: false },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Faro Casino',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0d0d10',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${_geistSans.variable} ${_geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#0d0d10" />
        <meta name="msapplication-TileColor" content="#0d0d10" />
        <meta name="application-name" content="Faro Casino" />
        <meta name="apple-mobile-web-app-title" content="Faro Casino" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="icon" href="/favicon.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="frc-body antialiased">
        {children}
      </body>
    </html>
  )
}
