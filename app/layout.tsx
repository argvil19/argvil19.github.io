import ParticlesComponent from '@/components/Particles/Particles'
import './globals.scss'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/MainLayout'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Argenis Villasmil',
  description:
    'Hey! I am a Full Stack Web Developer and this is my resume/portfolio page.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2ZVL382XEC"
      ></Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2ZVL382XEC');
        `}
      </Script>
      <body className={inter.className}>
        <div></div>
        <ParticlesComponent />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
