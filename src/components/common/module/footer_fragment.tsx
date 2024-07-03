import React from 'react'

function Footer_fragment() {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <section className='flex justify-center items-center space-x-3 text-gray-3 mt-14'>
          <h6 className='font-normal text-sm'>Copyright {year}, JobHQ</h6>
          <div className=""></div>
          <h6 className='font-normal text-sm'>Privacy Policy</h6>
          <h6 className='font-normal text-sm'>Website Terms</h6>
          <h6 className='font-normal text-sm'>Accessibility</h6>
    </section>
  )
}

export default Footer_fragment
