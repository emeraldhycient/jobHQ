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


export interface LoginPayload {
    email: string;
    password: string;
    userType: 'User' | 'Employer';
}

export interface CreateAccountPayload {
    email?: string;
    password: string;
    name?: string;
    userType: 'User' | 'Employer';
    country: string;
}

export enum Endpoints {
    Login = "auth/login",
    Signup = "auth/create-account",
    Analytics ="analytics",
    Logout = "/auth/logout"
}

export interface CreateAccountPagePayload {
    email?: string;
    password: string;
    confirmPassword: string;
    name?: string;
    userType: 'User' | 'Employer';
    country: string;
}

export type FieldType = 'TEXT' | 'CHECKBOX' | 'DROPDOWN';
export interface FormField {
    id: string;
    type: FieldType;
    label: string;
    options: string[];
}

export interface Form {
    id: string;
    title: string;
    fields: FormField[];
    createdAt: Date;
    updatedAt: Date;
}

export interface FormResponse {
    id: string;
    formId: string;
    responses: Record<string, any>;
    createdAt: Date;
}
