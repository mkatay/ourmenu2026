import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export const TimeSpent = () => {
    const [timeSpent,setTimeSpent]=useState(0)
    useEffect(()=>{
        const timer=setTimeout(()=>setTimeSpent(prev=>prev+1),1000)
        return ()=>clearTimeout(timer)
    },[timeSpent])
  return (
    <div className='absolute right-4 top-4 font-normal text-xs border border-amber-600 p-2 rounded-full'>
      {timeSpent}s
    </div>
  )
}

