import Footer from '@/components/common/footer'
import Step_Counter from '@/components/common/step_counter'
import HeroSection from '@/components/landing_page/hero'
import React from 'react'

function page() {
    return (
        <div>
            <Step_Counter>
                <Footer />
                <HeroSection />
                <Footer />
            </Step_Counter>
        </div>
    )
}

export default page
