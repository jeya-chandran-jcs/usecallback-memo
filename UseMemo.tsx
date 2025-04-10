import React, { useMemo, useState } from 'react'

export default function UseMemo() {
const [num,setNum]=useState<number>(1)

    const slowFunc=useMemo(()=>{
        return million() + num
    },[num])

    const handleIncrease=()=>{
        setNum((prev)=>prev+1)
    }


  return (
    <div className="flex justify-center items-center  p-10">
        <h3>Result : {slowFunc}</h3>
        <button className='w-8 rounded p-3 m-3 bg-blue-500 text-bold' onClick={handleIncrease}>+</button>

    </div>
  )
}


function million()
{
    for(let i=0;i<10000000;i++){}
    return 10
}
