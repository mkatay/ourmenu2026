import React from 'react'
import { allCategories } from '../utils'
import { ButtonGroup } from '@heroui/react'
import { Button } from '@heroui/react'
import { useState } from 'react'
import { motion, scale, spring } from "motion/react"
import { TimeSpent } from './TimeSpent'

export const MyHeader = ({selectedCateg, setSelectedCateg}) => {
    const [categories, setCategories] = useState(allCategories)


  return (
    <div className='flex flex-col items-center relative'>
                <motion.h1 className='text-amber-400 text-2xl p-4 font-bold'
                    initial={{ scale: 0 ,x:'100vw'}} 
                    animate={{
                        scale: 1, 
                        x:0,
                        transition: {duration:1, type:spring,stiffness:20}
                            }}
                    >
                    Our Menu
                    <TimeSpent />
                </motion.h1>
        <ButtonGroup  size="lg" className={'bg-amber-400 text-gray-900 rounded-3xl'}
           
        >
            {categories.map((ctg,index)=>   
            <Button key={index} className={selectedCateg==ctg? 'bg-gray-900 text-amber-400': 'bg-amber-400 text-gray-900 '}
                onClick={()=>setSelectedCateg(ctg)}>
                <ButtonGroup.Separator className='text-gray-900'/>
                <motion.span whileHover={{scale:1.2}}>{ctg}</motion.span>
            </Button>      
            )}
        </ButtonGroup>
       
        </div>

  )
}

