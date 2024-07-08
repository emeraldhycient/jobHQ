import CompanyContactInformation from '@/components/auth/account-setup/employer/company_contact'
import CompanyInfo from '@/components/auth/account-setup/employer/company_info'
import CompanyProfileInformation from '@/components/auth/account-setup/employer/company_profile'
import CompanySocialInformation from '@/components/auth/account-setup/employer/company_socials'
import SkillsCertification from '@/components/auth/account-setup/job-seeker/current_skill'
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
                    <CompanyInfo />
                    {/*@ts-ignore*/}
                    <CompanyProfileInformation />
                    {/*@ts-ignore*/}
                    <CompanySocialInformation />
                    {/*@ts-ignore*/}
                    <CompanyContactInformation />
                </Step_Counter>
            </div>
        </section>
    )
}

export default page
