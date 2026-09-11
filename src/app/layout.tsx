import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { DeviceCapabilityProvider } from "@/context/DeviceCapabilityContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saheli-chattoraj.vercel.app"),
  title: {
    default: "Saheli Chattoraj — Business Analytics & Project Management | Final Year B.Tech",
    template: "%s | Saheli Chattoraj",
  },
  description:
    "Official portfolio of Saheli Chattoraj, Final Year B.Tech student specializing in business analytics, operational reporting, and project coordination.",
  keywords: [
    "Saheli Chattoraj",
    "Saheli Chattoraj Portfolio",
    "Business Analyst",
    "Project Coordinator",
    "Associate Product Manager",
    "APM",
    "Product Operations",
    "SQL Analytics",
    "Excel Reporting",
    "B.Tech Computer Science",
    "Final Year Student",
  ],
  authors: [{ name: "Saheli Chattoraj" }],
  creator: "Saheli Chattoraj",
  publisher: "Saheli Chattoraj",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saheli-chattoraj.vercel.app",
    title: "Saheli Chattoraj — Business Analytics & Project Management",
    description:
      "Modern, sleek portfolio of Saheli Chattoraj. Exploring business analytics, KPI reporting, and project coordination.",
    siteName: "Saheli Chattoraj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saheli Chattoraj — Business Analytics & Project Management",
    description:
      "Turning data into actionable insights and bridging technical execution with project coordination. Final Year B.Tech.",
  },
  alternates: {
    canonical: "/",
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
      className={`${plusJakartaSans.variable} ${outfit.variable} dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-zinc-800 selection:text-zinc-100">
        <DeviceCapabilityProvider>{children}</DeviceCapabilityProvider>
      </body>
    </html>
  );
}
