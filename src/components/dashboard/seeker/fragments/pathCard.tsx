import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {
    title: string
}

const PathCard = (props: Props) => {
    return (
        <section className='w-full bg-gray-7 px-4 py-6 rounded-2xl space-y-4'>
            <h3 className='text-base font-normal'>{props.title}</h3>
            <h6 className='text-xs font-normal'>Modules Completed: <span className='text-xs font-bold'>3</span> of <span className='text-xs font-bold'>5</span></h6>
            <section className='flex justify-between items-center '>
                <div className="rounded-full bg-green-light text-green-primary px-3 py-2">
                    <h6 className='text-xs font-semibold'>
                        IT & Software
                    </h6>
                </div>
                <div className="bg-blue-primary p-2 rounded-full">
                    <h6 className='text-xs font-normal'>30%</h6>
                </div>
            </section>
            <Button variant={'lucentblue'} size={'lg'} asChild>
                <Link href={""} className="w-full">
                    <p>
                        Resume learning
                    </p>
                </Link>
            </Button>
        </section>
    )
}

export default PathCard