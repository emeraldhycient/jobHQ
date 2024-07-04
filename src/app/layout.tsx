import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobHQ | Empowering Your Career Journey",
  description: "Discover your dream job, upskill with cutting-edge resources, and succeed with JobHQ. Start your path to career excellence today!",
  // og: {
  //   title: "JobHQ | Empower Your Career",
  //   type: "website",
  //   url: "https://www.jobhq.com",
  //   description: "Explore top jobs, learn with AI-driven resources, and prepare for interviews with JobHQ. Your ultimate career platform.",
  //   image: "https://www.jobhq.com/og-image.jpg"
  // }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>JobHQ | Your Career Starts Here</title>
        <meta name="description" content="Kickstart your career with JobHQ, the leading platform for job seeking and professional growth. Find jobs, upskill, and prepare for interviews with our AI-driven tools." />
        <link rel="canonical" href="https://jobhq.cloud" />
        <meta property="og:title" content="JobHQ | Your Career Starts Here" />
        <meta property="og:description" content="Explore and apply to thousands of jobs with JobHQ, your ultimate career partner." />
        <meta property="og:url" content="https://jobhq.cloud" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jobhq.cloud/logo/jobHQ_logo.svg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "JobHQ",
            "url": "https://jobhq.cloud",
            "logo": "https://jobhq.cloud/logo/jobHQ_logo.svg",
            "sameAs": [
              "https://www.facebook.com/yourpage",
              "https://www.twitter.com/yourpage",
              "https://www.linkedin.com/in/yourpage"
            ]
          })}
        </script>
      </Head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
