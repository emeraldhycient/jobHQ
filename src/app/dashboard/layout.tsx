import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Discover your dream job, upskill with cutting-edge resources, and succeed with JobHQ. Start your path to career excellence today!",
    // og: {
    //   title: "JobHQ | Empower Your Career",
    //   type: "website",
    //   url: "https://www.jobhq.com",
    //   description: "Explore top jobs, learn with AI-driven resources, and prepare for interviews with JobHQ. Your ultimate career platform.",
    //   image: "https://www.jobhq.com/og-image.jpg"
    // }
};


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    );
}
