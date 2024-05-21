import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'

const page = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Approach /> */}
        {/* <Footer /> */}
      </div>
    </main>
  )
}

export default page