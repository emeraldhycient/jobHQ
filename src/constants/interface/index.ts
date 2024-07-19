import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface nextStepChildProps {
    nextStep: () => void;
    index: number;
    isCurrentStep: boolean;
    isCompleted: boolean;
}


export interface SelectableOptionProps {
    label: string;
    selected?: boolean;
    onSelect?: () => void;
}


export interface SidebarItem {
    path: string;
    icon: IconType | any;
    label: string;
}


export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    profilePicture?: string;
    professionalTitle?: string;
    contactInfo?: string;
    resumes?: any;
    resumeUrls?: any;
    skills?: any;
    setupComplete: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Employer {
    id: string;
    companyName: string;
    companyEmail: string;
    industry?: string;
    teamSize?: string;
    organizationType?: string;
    description?: string;
    logo?: string;
    yearOfEstablishment?: string;
    socialMedias?: any;
    contactInfo?: any;
    setupComplete: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface Job {
    id: string;
    title: string;
    description: string;
    location: string;
    type: string;
    requirements: string[];
    responsibilities: string[];
    salaryRange?: string;
    benefits: string[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
