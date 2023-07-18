import React from 'react'
import { CiPaperplane } from 'react-icons/ci'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-[#000000] flex justify-center items-center p-4 lower-text-2xl'>
            <form method='POST' action="https://getform.io/f/0a520f97-6d11-4b61-a879-05ce6c4b6277" className='flex flex-col max-w-[1000px] w-full'>
                <div className='pb-8 pl-8'>
                    <h1 className='text-4xl sm:text-left sm:text-7xl inline font-bold text-[#e5e5e5]'>Contact <span className='gradient-text'>Me</span></h1>
                </div>
                <div className='flex flex-col pl-8 pr-8'>
                    <input className='rounded-lg p-4 bg-[#e5e5e5]' type="text" placeholder='Full Name' name='name' />
                    <input className='my-4 rounded-lg p-4 bg-[#e5e5e5]' type="email" placeholder='Email' name='email' />
                    <textarea className='rounded-lg p-4 bg-[#e5e5e5]' placeholder='I saw the funniest thing today...' name="message" rows="10"></textarea>
                    <button className='back-color group text-black flex items-center px-6 py-3 my-8 mx-auto rounded-lg hover:bg-[#95d5b2] transition duration-300 hover:shadow-2xl hover:shadow-cyan-500/50'>Send
                        <span className='group-hover:translate-x-2 duration-300'><CiPaperplane className='ml-4' /></span>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Contact