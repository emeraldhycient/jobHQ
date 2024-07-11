import { MdDashboard, MdWork, MdSearch, MdBookmark, MdSchool, MdDescription, MdSettings } from 'react-icons/md';
import { SidebarItem } from '../interface';
import BoxIcon from '@/components/icons/BoxIcon';
import BookmarkIcon from '@/components/icons/BookmarkIcon';
import GridIcon from '@/components/icons/GridIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import EducationIcon from '@/components/icons/EducationIcon';
import AIResumeIcon from '@/components/icons/AiResumeIcon';


export const footerSections = [
    {
        title: "Employer",
        links: [
            { href: "", text: "Add Jobs" },
            { href: "", text: "Manage Listing" },
            { href: "", text: "Recruitment Analytics" },
            { href: "", text: "Employer Dashboard" },
        ],
    },
    {
        title: "Job Seeker",
        links: [
            { href: "", text: "Browse Jobs" },
            { href: "", text: "Browse Categories" },
            { href: "", text: "Resume Upload" },
            { href: "", text: "Candidate Dashboard" },
        ],
    },
    {
        title: "Resources",
        links: [
            { href: "", text: "Learning Path" },
            { href: "", text: "Knowledge Base" },
            { href: "", text: "Contact Support" },
            { href: "", text: "Help Center" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "", text: "About" },
            { href: "", text: "Contact" },
            { href: "", text: "Recruitment Analytics" },
            { href: "", text: "Privacy Policy" },
        ],
    },
];


export const predefinedSkills = [
    "Accounting",
    "Active Listening",
    "Adaptability",
    "Adobe Creative Suite",
    "Agile Methodologies",
    "Analytical Skills",
    "Artificial Intelligence",
    "Attention to Detail",
    "Audit Management",
    "Automation Testing",
    "AWS",
    "Big Data Analysis",
    "Brand Management",
    "Budgeting",
    "Business Analysis",
    "Business Development",
    "Business Intelligence",
    "Change Management",
    "Client Management",
    "Cloud Computing",
    "Communication Skills",
    "Conflict Resolution",
    "Content Creation",
    "Content Marketing",
    "Copywriting",
    "Creativity",
    "Critical Thinking",
    "Customer Relationship Management",
    "Customer Service",
    "Data Analysis",
    "Data Mining",
    "Data Science",
    "Data Visualization",
    "Database Management",
    "Digital Marketing",
    "Docker",
    "E-commerce",
    "Email Marketing",
    "Emotional Intelligence",
    "Event Planning",
    "Excel",
    "Financial Analysis",
    "Front-End Development",
    "Full Stack Development",
    "Git",
    "Google Analytics",
    "Graphic Design",
    "Hadoop",
    "HTML/CSS",
    "Human Resources",
    "IT Management",
    "JavaScript",
    "JIRA",
    "Leadership",
    "Machine Learning",
    "Marketing Strategy",
    "Microsoft Office",
    "Mobile Development",
    "Network Security",
    "Negotiation",
    "Operations Management",
    "Organizational Skills",
    "PHP",
    "Presentation Skills",
    "Problem Solving",
    "Product Management",
    "Project Management",
    "Public Speaking",
    "Python",
    "Quality Assurance",
    "React",
    "Remote Work",
    "Research",
    "Risk Management",
    "Sales",
    "SCRUM",
    "SEO",
    "Social Media Marketing",
    "Software Development",
    "SQL",
    "Stakeholder Management",
    "Strategic Planning",
    "Team Leadership",
    "Teamwork",
    "Time Management",
    "Troubleshooting",
    "UI/UX Design",
    "User Research",
    "Version Control",
    "Web Development",
    "WordPress",
    "Work Ethic"
];



export const organizationTypes = [
    'Public Company',
    'Private Company',
    'Government Agency',
    'Non-Profit Organization',
    'Educational Institution',
    'Startup',
    'Sole Proprietorship',
];

export const industryTypes = [
    'Accounting & Finance',
    'IT & Technology',
    'Human Resources',
    'Non-Profit Organization',
    'Marketing & Sales',
    'Government',
    'E-commerce',
    'Customer Service',
    'Healthcare',
    'Other',
];

export const teamSizes = [
    '1-10 Employees',
    '11-50 Employees',
    '51-200 Employees',
    '201-500 Employees',
    '500+ Employees',
];



// sidebarItems.ts




export const sidebarItems: SidebarItem[] = [
    { path: '/', icon: GridIcon, label: 'Overview' },
    { path: '/applied-jobs', icon: BoxIcon, label: 'Applied Jobs' },
    { path: '/job-search', icon: MdSearch, label: 'Job Search' },
    { path: '/bookmarks', icon: BookmarkIcon, label: 'Bookmarks' },
    { path: '/learning-paths', icon: EducationIcon, label: 'Learning Paths' },
    { path: '/ai-resume', icon: AIResumeIcon, label: 'AI Resume' },
    { path: '/settings', icon: MdSettings, label: 'Settings' },
];

