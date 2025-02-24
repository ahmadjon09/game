import { Timer } from 'phosphor-react'
import React, { useContext } from 'react'
import { DataCon } from '../Context/Context'
export function Time() {
    const { t, setT } = useContext(DataCon)
    return (
        <div className={`container w-full h-full ${t ? "flex" : "hidden"} justify-center items-center fixed top-0 left-auto bg-[#0000]`}>
            <div className=" w-[250px] h-[300px] bg-white flex items-center flex-col justify-center gap-5 shadow-lg rounded-lg">
                <h1 className='text-2xl font-bold text-red-500'>
                    Time's up !
                </h1>
                <Timer size={70} color="red" weight="duotone" />
                <button onClick={() => setT(false)} className='px-10 py-1 bg-red-500 text-white rounded-lg'>Restart</button>
            </div>
        </div>
    )
}
