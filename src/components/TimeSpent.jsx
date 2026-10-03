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
    <div >
      {timeSpent}s
    </div>
  )
}

