'use client'
import Analytics from "@/components/dashboard/seeker/analytics";
import LearningProgress from "@/components/dashboard/seeker/learningProgress";
import RecentlyApplied from "@/components/dashboard/seeker/recentlyApplied";
import RecommendedJobs from "@/components/dashboard/seeker/recommendedJobs";
import BellIcon from "@/components/icons/BellIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import BoxIcon from "@/components/icons/BoxIcon";
import { useStore } from '@tanstack/react-store';
import { userStore, setUser, clearUser } from '@/stores/userStore';
import { useQuery } from '@tanstack/react-query'
import auth from "@/services/auth";
import jobs from "@/services/jobs";


const DashboardPage = () => {

  // const user = useStore(userStore, (state) => state.user);
  // const isAuthenticated = useStore(userStore, (state) => state.isAuthenticated);

  const favoriteJobs = 100;
  const jobAlerts = 100;

  const recentlyAppliedJobs = useQuery({
    queryKey: ['recentlyAppliedJobs'],
    queryFn:()=> jobs.getAppliedJobs({page:1,limit:5}),
    refetchOnWindowFocus: false,
  });

  const learningCourses = [
    { id: 1, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 2, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 3, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
  ];

  const recommendedJobs = [
    { id: 1, title: 'Product Designer', company: 'Metalab', location: 'Lagos, Nigeria', type: 'Full Time', postedDate: 'Posted 1 Month Ago' },
    { id: 2, title: 'Product Designer', company: 'SAP', location: 'Lagos, Nigeria', type: 'Hybrid', postedDate: 'Posted 1 Month Ago' },
    { id: 3, title: 'Product Designer', company: 'Total Energies', location: 'Lagos, Nigeria', type: 'Full Time', postedDate: 'Posted 1 Month Ago' },
    { id: 4, title: 'Product Designer', company: 'Twitter', location: 'Lagos, Nigeria', type: 'Part Time', postedDate: 'Posted 1 Month Ago' },
  ];


  const analyticsData = [
    {
      id: 1,
      title: "Applied Jobs",
      value: recentlyAppliedJobs?.data?.pagination?.totalJobs,
      icon: <BoxIcon height={20} width={20} />
    },
    {
      id: 2,
      title: "Favorite Jobs",
      value: favoriteJobs,
      icon: <BookmarkIcon height={20} width={20} />

    },
    {
      id: 3,
      title: "Job Alerts",
      value: jobAlerts,
      icon: <BellIcon height={20} width={20} />

    },
  ]

  return (
    <div className="flex flex-col space-y-4 bg-gray-5 rounded">
      <Analytics
        data={analyticsData}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 space-y-4 md:space-y-0 md:space-x-4">
        <div className="col-span-8 sm:order-last md:order-first">
          <RecentlyApplied jobs={recentlyAppliedJobs?.data?.jobs} isLoading={recentlyAppliedJobs?.isLoading} />
          <RecommendedJobs jobs={recommendedJobs} />

        </div>
        <div className="col-span-4 sm:order-1 md:order-last">
          <LearningProgress courses={learningCourses} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
