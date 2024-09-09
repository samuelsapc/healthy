import React from 'react'
import { NavBar } from '../../components/NavBar'
import { Sidebar } from '@/components/Sidebar'

export default function LayoutDashboard({children}: {children: React.ReactElement}) {
  return (
    <div className='flex w-full h-full'>
        <div className='hidden xl:block w-80 h-full xl:fixed'>
            <Sidebar/>
        </div>
        <div className='w-full xl:ml-80'>
            <NavBar />
            <div className='p-6 h-full bg-[#fafbfc] dark:bg-slate-800'>
                {children}
            </div>
            
        </div>
    </div>
  )
}
