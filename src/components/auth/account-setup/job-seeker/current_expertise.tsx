"use client"
import React, { useState } from 'react';
import SelectableOption from '@/components/common/SelectableOption';
import { Button } from '@/components/ui/button';
import { nextStepChildProps } from '@/constants/interface';

const options = [
  'Architecture and Engineering',
  'Information Technology and Software',
  'Accounting and Finance',
  'Management and Consultancy',
  'Writing and Content',
  'Customer Support Officer'
];

const CurrentExpertise: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelectedOptions(prevSelected =>
      prevSelected.includes(option)
        ? prevSelected.filter(item => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto mt-2 mb-10">
      <h4 className='text-lg font-medium text-center px-4 md:px-0 mb-5'>What is Your Expertise?</h4>
      <div className="mb-10">
        {options.map((option, index) => (
          <SelectableOption
            key={index}
            label={option}
            selected={selectedOptions.includes(option)}
            onSelect={() => handleSelect(option)}
          />
        ))}
      </div>
      <Button variant={'default'} size={'lg'} asChild onClick={nextStep}>
        <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
          Continue
        </p>
      </Button>
    </div>
  );
}

export default CurrentExpertise;





