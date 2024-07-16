'use client'
import SuggestionPill from "@/components/common/SuggestionPill";
import PathCard from "@/components/dashboard/seeker/fragments/pathCard";
import BellIcon from "@/components/icons/BellIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import BoxIcon from "@/components/icons/BoxIcon";
import { Button } from "@/components/ui/button";
import { predefinedSkills } from "@/constants/data";
import { FC, useState } from "react";
import { MdSearch } from 'react-icons/md';

const DashboardPage = () => {
 
  const learningCourses = [
    { id: 1, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 2, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
    { id: 3, title: 'Learn Python Programming Masterclass', modulesCompleted: 3, totalModules: 5, category: 'IT & Software' },
  ];

  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>('');

  const handleSkillAdd = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleSkillRemove = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  


  return (
    <div className="flex flex-col space-y-4 py-8">
      <SearchBar />
      <div className="flex flex-wrap gap-2 mt-2">
        {learningCourses.map((skill, index) => (
          <SuggestionPill key={index} title={skill.title} onRemove={() => handleSkillRemove(skill.title)} />
        ))}
      </div>
      <h5 className='text-sm font-normal'>Learning Progress</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-4 space-x-4">
        {learningCourses.map((course) => (
          <PathCard title={course.title} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilter?: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, onFilter }) => {
  return (
    <div className="flex items-center space-x-2 w-full px-5 py-2  bg-gray-5 border border-gray-8 rounded-3xl">
      <MdSearch height={10} width={10} />
      <input
        type="text"
        placeholder="Enter a topic or Keyword to get started"
        className="flex-grow p-2 bg-transparent border-none outline-none text-white text-xs font-normal"
        // onChange={(e) => onSearch(e.target.value)}
      />
        <Button size={'sm'}>Generate</Button>
    </div>
  );
};

