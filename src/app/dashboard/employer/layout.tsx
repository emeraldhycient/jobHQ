import Sidebar from "@/components/dashboard/seeker/layout/sidebar";
import TopNav from "@/components/dashboard/seeker/layout/topNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JobHQ | Job Seeker Dashboard",
    description: "Discover your dream job, upskill with cutting-edge resources, and succeed with JobHQ. Start your path to career excellence today!",
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
                <main className="flex-1 p-4 bg-gray-5 rounded overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
