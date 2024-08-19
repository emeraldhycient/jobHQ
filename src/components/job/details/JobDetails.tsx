import ApplicationDeadline from '@/components/job/details/ApplicationDeadline';
import Benefits from '@/components/job/details/Benefits';
import HowToApply from '@/components/job/details/HowToApply';
import JobDescription from '@/components/job/details/JobDescription';
import JobHeader from '@/components/job/details/JobHeader';
import Qualifications from '@/components/job/details/Qualifications';
import Salary from '@/components/job/details/Salary';
import { FC } from 'react';


const JobDetails: FC = () => {
    return (
        <div className="py-8 px-2 md:px-8 space-y-6 text-gray-1">
            <JobHeader
                title="Product Designer"
                company="MetaLab"
                location="Lagos, Nigeria"
                postedDate="Posted 1 Month Ago"
            />
            <JobDescription description="SAP is seeking a talented and creative Product Designer (UI) to join our dynamic team at SAP Pioneer. In this role, you'll play a vital part in shaping the user experience (UX) of our cutting-edge financial technology solutions. You'll collaborate closely with cross-functional teams to design user-centric interfaces that are both visually appealing and functionally intuitive for our global user base." />
            <Qualifications qualifications={[
                "Minimum 3+ years of experience as a Product Designer (UI) or a similar role within the technology sector.",
                "Proven track record of designing user-friendly and visually compelling interfaces for web and/or mobile applications.",
                "In-depth knowledge of UI design principles and best practices.",
                "Expertise in design tools like Figma, Sketch, or Adobe XD.",
                "Experience with design systems and a strong understanding of their benefits.",
                "A passion for creating innovative solutions that solve real-world business problems.",
                "Experience with design for financial services applications is a plus."
            ]} />
            <Benefits benefits={[
                "Competitive salary and benefits package.",
                "Opportunity to work on cutting-edge FinTech solutions that empower businesses globally.",
                "Collaborative and fast-paced work environment with a focus on innovation.",
                "Continuous learning and development opportunities within a world-renowned technology leader.",
                "Be part of a diverse and inclusive team that values creativity and problem-solving."
            ]} />
            <Salary salary="$250,000 to $300,000 Annually" />
            <HowToApply instructions="If you're a passionate and talented UI designer who thrives in a collaborative environment, we encourage you to apply! Please submit your resume and portfolio to email@gmail.com" />
            <ApplicationDeadline deadline="24th July, 2024" />
        </div>
    );
};

export default JobDetails;
