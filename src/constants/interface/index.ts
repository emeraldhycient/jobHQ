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



// Decoded token response

// Interface for the Employer token
interface EmployerResponse {
    userId: string;
    email: string;
    userType: 'Employer';
    companyId: string;
    companyName: string;
    companyEmail: string;
}

// Interface for the User token
interface UserResponse {
    userId: string;
    email: string;
    userType: 'User';
}

// Union type representing the possible response
export interface AuthResponse {
    userId: string;
    email: string;
    userType: 'User' | 'Employer';
    companyId?: string;
    companyName?: string;
    companyEmail?: string;
}



export interface AppliedJobItem {
    id: string;
    status: string;
    dateApplied: string;
    userId: string;
    jobId: string;
    resumeId: string;
    job: {
        id: string;
        title: string;
        description: string;
        location: string;
        type: string;
        requirements: string[];
        responsibilities: string[];
        salaryRange?: string | null;
        benefits: string[];
        status: string;
        employerId: string;
        createdAt: string;
        updatedAt: string;
        postedBy: {
            id: string;
            companyName: string;
            companyEmail: string;
            industry: string;
            teamSize?: string | null;
            organizationType?: string | null;
            description: string;
            logo: string;
            yearOfEstablishment?: string | null;
            socialMedias?: any;
            contactInfo?: any;
            country: string;
            setupComplete: boolean;
            createdAt: string;
            updatedAt: string;
        };
    };
}

export interface GetAppliedJobsParams {
    page?: number;
    limit?: number;
}


export interface IJobItem {
    id: string;
    title: string;
    description: string;
    location: string;
    type: string;
    requirements: string[];
    responsibilities: string[];
    salaryRange: string | null;
    benefits: string[];
    status: string;
    employerId: string;
    createdAt: string;
    updatedAt: string;
    postedBy: IEmployer;
    isBookmarked: boolean,
    questions?: Form;
}

export interface IEmployer {
    id: string;
    companyName: string;
    companyEmail: string;
    industry: string;
    teamSize: string | null;
    organizationType: string | null;
    description: string;
    logo: string;
    yearOfEstablishment: string | null;
    socialMedias: any | null; // Adjust the type if you have a specific structure for social media.
    contactInfo: any | null; // Adjust the type if you have a specific structure for contact info.
    country: string;
    setupComplete: boolean;
    createdAt: string;
    updatedAt: string;
}



export interface GetJobsParams {
    page?: number;
    limit?: number;
    title?: string;
    location?: string;
    type?: string;
    requirements?: string[];
    responsibilities?: string[];
    salaryRange?: string;
    benefits?: string[];
    status?: string;
    employerId?: string;
}




//learning path
export interface ILearningPath {
    id?:string,
    title: string;
    description: string;
    roadmap: CoreTopic[];
    overallEstimatedCompletionTime: string;
}

interface CoreTopic {
    step: number;
    title: string;
    keyConcepts: string[];
    resources: Resource[];
    subtopics: Subtopic[];
    projectIdeas: ProjectIdea[];
}

interface Resource {
    resourceType: string;
    links: string[];
}

interface Subtopic {
    substep: number;
    title: string;
    description: string;
    keyConcepts: string[];
    images: string[];
    videos: string[];
    links: string[];
    text: string[];
    practiceQuestions: PracticeQuestion[];
    estimatedTime: string;
}

interface PracticeQuestion {
    question: string;
    answer: string;
}

interface ProjectIdea {
    ideaTitle: string;
    description: string;
}

export type ICreateLearningPath = { title: string, experienceLevel?: string, focusArea?: string }

export interface IResumePromptProps {
    language: string;
    tone: string;
    resume: string;
    jobDescription: string;
    wordLimit: number;
    numberOfResults: number;
    creativityLevel: string;
    experienceLevel: string;
}

export interface ICoverLetterPromptProps {
    language: string;
    tone: string;
    name: string;
    jobPosition: string;
    experience: string;
    jobDescription: string;
    wordLimit: number;
    numberOfResults: number;
    creativityLevel: string;
}