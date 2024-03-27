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
      <head>
        <Script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-59G47CNB');
        `}
        </Script>
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
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-59G47CNB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <div></div>
        <ParticlesComponent />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
