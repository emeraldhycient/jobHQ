'use client'
import FilterIcon from '@/components/icons/filterIcon';
import { Button } from '@/components/ui/button';
import { utils } from '@/lib/utils';
import { useState, FC } from 'react';
import { MdSearch } from 'react-icons/md';
import { Sheet } from 'react-modal-sheet';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilter: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, onFilter }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <div className="flex items-center space-x-2 w-full px-5 py-2 bg-gray-5 border border-gray-8 rounded-3xl">
            <MdSearch height={10} width={10} />
            <input
                type="text"
                placeholder="Job Title, Position, Keyword"
                className="flex-grow p-2 bg-transparent border-none outline-none text-white text-xs font-normal"
                onChange={handleSearch}
            />
            <input
                type="text"
                placeholder="City, State or Country"
                className="flex-grow p-2 bg-transparent border-l border-gray-8 outline-none text-white text-xs font-normal"
                onChange={handleSearch}
            />
            <div className="hidden md:block">
                <Button size={'sm'}>Search</Button>
            </div>
            <button onClick={onFilter} className="block md:hidden text-white">
                <FilterIcon />
            </button>
        </div>
    );
};

interface FilterProps {
    onFilterChange: (filterType: string, value: string) => void;
}

const Filter: FC<FilterProps> = ({ onFilterChange }) => {
    const filterTypes = [
        { title: "Posted At", name: 'createdAt', options: ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days'] },
        { title: "Experience", name: 'experience', options: ['ENTRY_LEVEL', 'MID_LEVEL', 'SENIOR_LEVEL', 'DIRECTOR', 'EXECUTIVE', 'INTERN'] },
        // { title: "Salary", name: 'salaryRange', options: ['< $50k', '$50k - $100k', '> $100k'] },
        { title: "Job Type", name: 'type', options: ['FULL_TIME', 'PART_TIME', 'REMOTE', 'VOLUNTEER', 'FREELANCE', 'TEMPORARY', 'INTERN', 'CONTRACT'] },
        { title: "Industry", name: 'industry', options: ['Technology', 'Healthcare', 'Finance'] },
        { title: "Company Size", name: 'size', options: ['1-50', '51-200', '201-500', '500+'] },
    ];

    return (
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 space-y-2 md:space-y-0 w-full">
            {filterTypes.map((filter) => (
                <select
                    key={filter.name}
                    className="px-5 md:px-3 py-4 md:py-2 bg-gray-5 border border-gray-8 outline-none rounded-3xl text-xs font-normal"
                    onChange={(e) => onFilterChange(filter.name, e.target.value)}
                >
                    <option value="">{filter.title}</option>
                    {filter.options.map((option, index) => (
                        <option key={index} value={option}>
                            {utils.formatText(option)}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
};

const JobSearchComponent: FC<{ onFilterChange: (filterType: string, value: string) => void }> = ({ onFilterChange }) => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleSearch = (query: string) => {
        onFilterChange('title', query);
    };

    const handleFilter = () => {
        setBottomSheetOpen(true);
    };

    return (
        <div className="space-y-2">
            <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
            <div className="hidden md:block py-4">
                <Filter onFilterChange={onFilterChange} />
            </div>
            <Sheet snapPoints={[0.5]} isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content className='bg-gray-7 pt-5 px-2'>
                        <Filter onFilterChange={onFilterChange} />
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
};

export default JobSearchComponent;
