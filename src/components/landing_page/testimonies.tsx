import React from 'react'
import TestimonyCard from './module/testimony_card'

function Testimonies() {
  return (
      <section className='px-6 md:px-24 text-white py-10 mt-10 bg-gray-2'>
          <div className="flex flex-col items-center justify-center">
              <h4 className='text-xl font-semibold'>What our Clients Say</h4>
              <h6 className='text-[14px] font-medium my-3 text-center w-[90%] md:w-[70%] lg:w-[65%]'>We have a reputation for helping companies and individuals around the world build wining teams and launch dream careers.</h6>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 mt-6">
              <TestimonyCard/>
              <TestimonyCard/>
              <TestimonyCard/>
          </div>
      </section>
  )
}

export default Testimonies
