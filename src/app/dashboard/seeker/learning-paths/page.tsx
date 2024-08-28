'use client'
import SuggestionPill from "@/components/common/SuggestionPill";
import PathCard from "@/components/dashboard/seeker/fragments/pathCard";
import { Button } from "@/components/ui/button";
import learningPath from "@/services/learning-path";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { MdSearch } from 'react-icons/md';
import toast from 'react-hot-toast';
import { ICreateLearningPath, ILearningPath } from "@/constants/interface";
import Spinner from "@/components/common/spinner";
import LearningSkeletonLoader from "@/components/common/skeleton/learningPathsSkeletonLoader";
import Pagination from "@/components/dashboard/seeker/fragments/pagination";

const DashboardPage = () => {


  const learningSuggestions = [
    { id: 1, title: 'Full-Stack Web Development with React and Node.js'},
    { id: 2, title: 'Data Science and Machine Learning Bootcamp'},
    { id: 3, title: 'Introduction to Cybersecurity' },
    // { id: 4, title: 'Mobile App Development with Flutter' },
    // { id: 5, title: 'Digital Marketing Strategy 101' },
    // { id: 6, title: 'Graphic Design Masterclass using Adobe Photoshop' },
    // { id: 7, title: 'Artificial Intelligence and Deep Learning' },
    // { id: 8, title: 'Introduction to Cloud Computing with AWS' },
    // { id: 9, title: 'Business Analytics using Excel and Python' },
    // { id: 10, title: 'Blockchain and Cryptocurrency Fundamentals' },
  ];

  const [skillInput, setSkillInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  const { data, isLoading, error } = useQuery({
    queryKey: ['learning-paths'],
    queryFn: () => learningPath.all({page:currentPage,limit:10}),
    refetchOnWindowFocus: false,
  });


  const generateLearningPath = useMutation({
    mutationFn: (data: ICreateLearningPath) => learningPath.create({ title: data?.title }),
    onSuccess: (data) => {
      console.log({ generateLearningPath: data });
      setIsGenerating(false);
    },
    onError: (error: any) => {
      setIsGenerating(false);
      toast.error(error?.response?.data?.message || "An Error Occurred!!");
    },
  });

  const handleGenerateLearningPath = () => {
    setIsGenerating(true);
    generateLearningPath.mutate({ title: skillInput });
  };

  return (
    <div className="flex flex-col space-y-4 py-8">
      <SearchBar
        value={skillInput}
        isLoading={isGenerating}
        onSearch={(text) => setSkillInput(text)}
        handleSubmit={handleGenerateLearningPath}
      />
      <div className="flex flex-row overflow-x-auto gap-2 mt-2 ">
        {learningSuggestions.map((skill, index) => (
          <SuggestionPill key={skill.id} onClick={() => setSkillInput(skill.title)} title={skill.title} onRemove={() => setSkillInput("")} />
        ))}
      </div>
      <h5 className='text-sm font-normal'>Learning Progress</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          !isLoading?
          data?.data?.length > 0?
          data.data?.map((course: ILearningPath) => (
          <PathCard key={course.id} title={course.title} data={course} />
          ))
            :
              <p className='text-xs text-center'>Generate learning paths to see it here</p>
            :
            <LearningSkeletonLoader/>
      }
      </div>
      {
        data && data?.pagination?.totalPages > currentPage ?
          <Pagination
            currentPage={currentPage}
            totalPages={data?.pagination?.totalPages || 1}
            onPageChange={handlePageChange}
          />
          : ""
      }
    </div>
  );
};

export default DashboardPage;

interface SearchBarProps {
  value: string;
  onSearch: (query: string) => void;
  handleSubmit?: () => void;
  isLoading: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ value, onSearch, handleSubmit, isLoading }) => {
  return (
    <div className="flex items-center space-x-2 w-full px-5 py-2 bg-gray-5 border border-gray-8 rounded-3xl">
      <MdSearch height={10} width={10} />
      <input
        type="text"
        value={value}
        placeholder="Enter a topic or keyword to get started"
        className="flex-grow p-2 bg-transparent border-none outline-none text-white text-xs font-normal"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button onClick={handleSubmit} size={'sm'} disabled={isLoading}>
        {isLoading ? <Spinner strokeColor="#E59333" /> : "Generate"}
      </Button>
    </div>
  );
};
