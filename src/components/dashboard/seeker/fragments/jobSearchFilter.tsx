'use client'
import FilterIcon from '@/components/icons/filterIcon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FC } from 'react';
import { MdSearch } from 'react-icons/md';
import { Sheet } from 'react-modal-sheet';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilter: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, onFilter }) => {
    return (
        <div className="flex items-center space-x-2 w-full px-5 py-2  bg-gray-5 border border-gray-8 rounded-3xl">
            <MdSearch height={10} width={10}/>
            <input
                type="text"
                placeholder="Job Title, Position, Keyword"
                className="flex-grow p-2 bg-transparent border-none outline-none text-white text-xs font-normal"
                onChange={(e) => onSearch(e.target.value)}
            />
            <input
                type="text"
                placeholder="City, State or Country"
                className="flex-grow p-2 bg-transparent border-l border-gray-8 outline-none text-white text-xs font-normal"
                onChange={(e) => onSearch(e.target.value)}
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
        { name: 'Posted At', options: ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days'] },
        { name: 'Industry', options: ['Technology', 'Healthcare', 'Finance'] },
        { name: 'Experience', options: ['Entry Level', 'Mid Level', 'Senior Level'] },
        { name: 'Salary', options: ['< $50k', '$50k - $100k', '> $100k'] },
        { name: 'Company Size', options: ['1-50', '51-200', '201-500', '500+'] },
        { name: 'Job Type', options: ['Full Time', 'Part Time', 'Contract'] },
    ];

    return (
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 space-y-2 md:space-y-0 w-full">
            {filterTypes.map((filter) => (
                <select
                    key={filter.name}
                    className="px-3 py-2 bg-gray-5 border border-gray-8  outline-none rounded-3xl text-xs font-normal"
                    onChange={(e) => onFilterChange(filter.name, e.target.value)}
                >
                    <option value="">{filter.name}</option>
                    {filter.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    );
};

const JobSearchComponent: FC = () => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleSearch = (query: string) => {
        console.log('Search query:', query);
    };

    const handleFilter = () => {
        setBottomSheetOpen(true);
    };

    const handleFilterChange = (filterType: string, value: string) => {
        console.log(`Filter type: ${filterType}, Value: ${value}`);
    };

    return (
        <div className="space-y-2">
            <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
            <div className="hidden md:block py-4">
                <Filter onFilterChange={handleFilterChange} />
            </div>
            <Sheet snapPoints={[0.5]} isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content className='bg-gray-7 pt-5 px-2'>
                        <Filter onFilterChange={handleFilterChange} />
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>

        </div>
    );
};

export default JobSearchComponent;
