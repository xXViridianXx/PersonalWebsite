import React from 'react'
import { SiCplusplus, SiPython, SiReact, SiTensorflow, SiNodedotjs, SiMysql, SiJavascript } from "react-icons/si"
import { DiLinux } from "react-icons/di"

const Skills = () => {
    return (
        <div name='skills' className='w-full h-full md:h-screen bg-[#000000] lower-text-3xl'>

            <div className='flex flex-col justify-center items-center w-full h-full text-[#e5e5e5]'>
                <div className='max-w-[1000px] w-full pb-8 pl-8 '>
                    <h1 className='text-4xl sm:text-left sm:text-7xl inline font-bold text-[#e5e5e5]'>What I<span className='gradient-text'> Know</span> </h1>
                </div>

                <div className='grid grid-cols-2 gap-8 sm:gap-37 md:gap-40 sm:grid-cols-3 md:grid-cols-4 text-[#e5e5e5] py-4'>
                    <div className='group'>
                        < SiCplusplus size={100} className='transition duration-500 border-solid group-hover:border-[#e5e5e5] border-r-4 border-b-4 border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiJavascript size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiPython size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiReact size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiTensorflow size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiNodedotjs size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < SiMysql size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                    <div className='group'>
                        < DiLinux size={100} className='transition duration-500 border-solid border-r-4 border-b-4 group-hover:border-[#e5e5e5] border-[#95d5b2] ease-in-out group-hover:scale-90 pr-4 pb-4' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills