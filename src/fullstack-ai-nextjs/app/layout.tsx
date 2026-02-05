import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { SchemaMarkup } from "@/components/schema-markup";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Stack AI | AI-Enabled CRM Strategy & Automation",
  description: "Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster. Schedule your AI audit and see how we can save you 20+ hours weekly with custom CRM automation and workflow solutions.",
  metadataBase: new URL('https://fullstackaiautomation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fullstackaiautomation.com',
    siteName: 'Full Stack AI',
    title: 'Full Stack AI | AI-Enabled CRM Strategy & Automation',
    description: 'Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Full Stack AI - AI-Enabled CRM Strategy & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack AI | AI-Enabled CRM Strategy & Automation',
    description: 'Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
