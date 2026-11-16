import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import CinematicPreloader from "@/components/cinematic-preloader";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Developer Portfolio`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Rifky Febrian Iskandar",
    "Full-stack developer",
    "Frontend engineering",
    "Backend development",
    "Web applications",
    "Workflow systems",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} — Developer Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/rifky.jpg",
        alt: `${DATA.name} — developer portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} — Developer Portfolio`,
    card: "summary_large_image",
    description: DATA.description,
    images: ["/rifky.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>

          <TooltipProvider delayDuration={0}>

            <div className="w-full">
              <CinematicPreloader />
              {children}
            </div>

          </TooltipProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
