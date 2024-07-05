"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { MdClose, MdAddCircleOutline } from 'react-icons/md';
import { nextStepChildProps } from '@/constants/interface';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FiSearch } from "react-icons/fi";
import CircledCancelIcon from '@/components/icons/CircledCancelIcon.tsx';

interface Certificate {
  name: string;
  size: string;
}

const SkillsCertification: React.FC<nextStepChildProps> = ({ nextStep, index, isCurrentStep, isCompleted }) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>('');
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [certificateInput, setCertificateInput] = useState<Certificate | null>(null);

  const handleSkillAdd = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleSkillRemove = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSkillAdd();
    }
  };

  // const handleCertificateAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //     const newCertificate: Certificate = { name: file.name, size: `${(file.size / 1024 / 1024).toFixed(1)} MB` };
  //     setCertificates([...certificates, newCertificate]);
  //     setCertificateInput(null); // Reset the input field
  //   }
  // };

  // const handleCertificateRemove = (name: string) => {
  //   setCertificates(certificates.filter(c => c.name !== name));
  // };

  return (
    <div className="w-full max-w-md mx-auto mt-2 mb-10">
      <h4 className='text-lg font-medium text-center px-4 md:px-0 mb-5'>Skills and Certification</h4>

      {/* Add Skills Section */}
      <div className="mb-8 space-y-3">
        <Label htmlFor="skill">Add Your Skills</Label>
        <Input
          leftIcon={FiSearch}
          id='skill'
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Product management"
        />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-gray-2 text-gray-1 px-4 py-3 rounded-lg">
              <span className='text-xs font-normal'>{skill}</span>
              <div className="ml-2 cursor-pointer" onClick={() => handleSkillRemove(skill)} >
                <CircledCancelIcon />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button variant={'default'} size={'lg'} asChild onClick={nextStep}>
        <p className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700'>
          Continue
        </p>
      </Button>

      {/* Add Certificates Section */}
      {/* <div className="mb-8">
        <h4 className="text-lg font-medium mb-2">Add Your Certificates</h4>
        <div className="flex items-center mb-4">
          <label className="flex-1 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white cursor-pointer">
            <MdAddCircleOutline className="mr-2" />
            Upload Certificates
            <input
              type="file"
              onChange={handleCertificateAdd}
              className="hidden"
            />
          </label>
        </div>
        <div className="flex flex-wrap gap-2">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-md">
              <span>{cert.name} - {cert.size}</span>
              <MdClose className="ml-2 cursor-pointer" onClick={() => handleCertificateRemove(cert.name)} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SkillsCertification;
