import Sidebar from "@/components/dashboard/layout/sidebar";
import TopNav from "@/components/dashboard/layout/topNav";
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
        <div className="flex h-screen bg-gray-900 w-screen">
            <div className="md:w-[15%]">
            <Sidebar />
            </div>
            <div className="flex flex-col flex-1">
                <TopNav />
                <main className="flex-1 p-4 bg-gray-800 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}


