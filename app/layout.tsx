import type { Metadata } from "next";
import { basePath } from "../data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiaheng Xiao · Agentic City",
  description: "Academic website of Jiaheng Xiao, a PhD researcher studying Agentic City, intelligent mobility, and human behaviour modelling.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><meta property="og:title" content="Jiaheng Xiao · Agentic City" /><meta property="og:description" content="Academic research on agentic AI, intelligent mobility, and human behaviour." /><meta property="og:image" content={`${basePath}/og-academic.png`} /><meta property="og:type" content="website" /><meta name="twitter:card" content="summary_large_image" /><meta name="theme-color" content="#ffffff" /></head><body>{children}</body></html>;
}
