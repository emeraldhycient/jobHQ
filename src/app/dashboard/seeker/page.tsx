'use client'
import React, { Suspense } from 'react';
import Analytics from "@/components/dashboard/seeker/analytics";
import LearningProgress from "@/components/dashboard/seeker/learningProgress";
import RecentlyApplied from "@/components/dashboard/seeker/recentlyApplied";
import RecommendedJobs from "@/components/dashboard/seeker/recommendedJobs";
import BellIcon from "@/components/icons/BellIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import BoxIcon from "@/components/icons/BoxIcon";
import { useQuery } from '@tanstack/react-query';
import jobs from "@/services/jobs";
import { ErrorBoundary } from 'react-error-boundary';
import SkeletonLoader from "@/components/common/skeleton/JobSkeletonLoader";
import ErrorFallback from '@/components/common/ErrorFallback';

const DashboardPage = () => {
  const favoriteJobs = 100;
  const jobAlerts = 100;

  const recentlyAppliedJobs = useQuery({
    queryKey: ['recentlyAppliedJobs'],
    queryFn: () => jobs.getAppliedJobs({ page: 1, limit: 5 }),
    refetchOnWindowFocus: false,
  });

  const recommendedJobs = useQuery({
    queryKey: ['jobs'],
    queryFn: () => jobs.getJobs({}),
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });


  const learningCourses = [
    { id: 1, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 2, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 3, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
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
  ];


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col space-y-4 bg-gray-5 rounded">
        <Analytics data={analyticsData} />
        <div className="grid grid-cols-1 lg:grid-cols-12 space-y-4 md:space-y-0 md:space-x-4">
          <div className="col-span-8 sm:order-last md:order-first">
            <Suspense fallback={<SkeletonLoader count={5} />}>
              <RecentlyApplied jobs={recentlyAppliedJobs?.data?.jobs} isLoading={recentlyAppliedJobs?.isLoading} />
            </Suspense>
              <RecommendedJobs isLoading={recommendedJobs.isLoading} jobs={recommendedJobs.data?.jobs} />
          </div>
          <div className="col-span-4 sm:order-1 md:order-last">
            <LearningProgress courses={learningCourses} />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardPage;
