import CareerGoals from '@/components/auth/account-setup/job-seeker/career_goals'
import CurrentExpertise from '@/components/auth/account-setup/job-seeker/current_expertise'
import SkillsCertification from '@/components/auth/account-setup/job-seeker/current_skill'
import CurrentSkill from '@/components/auth/account-setup/job-seeker/current_skill'
import ResumeUpload from '@/components/auth/account-setup/job-seeker/resume_upload'
import Header from '@/components/auth/header'
import Step_Counter from '@/components/common/step_counter'
import React from 'react'

function page() {
    return (
        <section className='px-2 md:px-24 text-gray-1'>
            <Header />
            <div className="w-[95%] md:w-[50%] mx-auto space-y-5 mt-10">
                <Step_Counter>
                    {/*@ts-ignore*/}
                    <CareerGoals />
                    {/*@ts-ignore*/}
                    <CurrentExpertise />
                    {/*@ts-ignore*/}
                    <SkillsCertification />
                    {/*@ts-ignore*/}
                    <ResumeUpload />
                </Step_Counter>
            </div>
        </section>
    )
}

export default page
