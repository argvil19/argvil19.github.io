import ParticlesComponent from '@/components/Particles/Particles'
import './globals.scss'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Argenis Villasmil',
  description: 'Portfolio page'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div></div>
        <ParticlesComponent />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
