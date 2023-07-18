import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { GiAnvilImpact, GiDuration } from "react-icons/gi"
import Spiderman from '../assests/spiderman.png'
import { Link } from 'react-scroll'

const Home = () => {

    // let name = new SplitType("#name")
    // let characters = document.querySelectorAll('.char')

    // for (let i = 0; i < characters.length; i++) {
    //     characters.classList.add('translate-y-full')
    // }

    // gsap.to('.char', {
    //     y: 0,
    //     stagger: .05,
    //     delay: .02,
    //     duration: .5
    // })

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div name='home' className='w-full h-screen bg-[#000000]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-[#e5e5e5] text-4xl font-bold sm:text-7xl tracking-wide'>I'm <span id="name" className='gradient-text'>Aniket Pratap</span></h1>
                <h3 className='text-white text-2xl font-bold tracking-wide'>A {''}
                    <div className='gradient-text inline'>
                        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Student', 'Creator', 'Software Developer', 'Leader']}
                                loop={5}
                                cursor={false}
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </div>

                </h3>
                <p className=' text-[#e5e5e5] py-4 max-w-[700px] tracking-wider  text-lg'><span className='gradient-text font-semibold'>Destiny</span> brought you here...</p>
                <div>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        <button className='back-color group text-black flex items-center px-6 py-3 my-2 rounded-lg hover:bg-[#95d5b2] transition duration-300 hover:scale-90 hover:shadow-2xl hover:shadow-cyan-500/50'>Cool Stuff
                            <span className='group-hover:-translate-y-2 duration-300'><GiAnvilImpact className='ml-4' /></span>
                        </button>
                    </Link>

                </div>
            </div>

        </div>


    )
}

export default Home