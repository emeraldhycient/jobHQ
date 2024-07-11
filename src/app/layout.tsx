import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
// import { GoogleAnalytics } from "@/components/GoogleAnalytics"; // Assume you have a GoogleAnalytics component

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobHQ | Empowering Your Career Journey",
  description: "Discover your dream job, upskill with cutting-edge resources, and succeed with JobHQ. Start your path to career excellence today!",
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
        <meta name="description" content="Kickstart your career with JobHQ, the leading platform for job seeking and professional growth. Find jobs, upskill, prepare for interviews, and get AI-driven resume reviews with JobHQ." />
        <link rel="canonical" href="https://jobhq.cloud" />
        <meta property="og:title" content="JobHQ | Your Career Starts Here" />
        <meta property="og:description" content="Explore and apply to thousands of jobs with JobHQ, your ultimate career partner." />
        <meta property="og:url" content="https://jobhq.cloud" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jobhq.cloud/logo/jobHQ_logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JobHQ | Your Career Starts Here" />
        <meta name="twitter:description" content="Explore and apply to thousands of jobs with JobHQ, your ultimate career partner." />
        <meta name="twitter:image" content="https://jobhq.cloud/logo/jobHQ_logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="robots" content="index, follow" />
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
            ],
            "description": "JobHQ is the ultimate platform for job seekers and employers. List jobs, apply, upskill, get AI-generated learning paths, AI prep interview questions, and AI-driven resume creation and review."
          })}
        </script>
      </Head>
      <body className={spaceGrotesk.className}>
        {/* <GoogleAnalytics /> */}
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
