import React from 'react'
import Bulbasaur from '../assests/pikachu.jpg';
import Homer from '../assests/homer.jpeg';
import Huffman from '../assests/Huffman.jpeg';
import Shell from '../assests/shell.jpeg';
import BigInt from '../assests/BigInt.png';

const Work = () => {
    return (
        <div name='projects' className='w-full h-full md:h-screen bg-[#000000] lower-text-3xl md:lower-text'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#e5e5e5]'>
                <div className='pb-8 pl-8 '>
                    <h1 className='text-4xl sm:text-left sm:text-7xl inline font-bold text-[#e5e5e5]'>Cool <span className='gradient-text'>Stuff</span></h1>
                </div>

                <div className='grid sm:grid-cols-2 gap-8 pl-8 pr-8 md:grid-cols-3 bg-[#000000]'>
                    <div style={{ backgroundImage: `url(${Bulbasaur})` }} className=' group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-[#e5e5e5] tracking-wider gradient-text'>
                                Pokemon Search Engine
                            </span>
                            {/* <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Try it!</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Homer})` }} className=' group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-[#e5e5e5] tracking-wider gradient-text'>
                                Homer Simpson text generator
                            </span>
                            {/* <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Try it!</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Huffman})` }} className=' group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-[#e5e5e5] tracking-wider gradient-text'>
                                Huffman Data Compression
                            </span>
                            {/* <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Try it!</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Shell})` }} className=' group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-[#e5e5e5] tracking-wider gradient-text'>
                                Shell
                            </span>
                            {/* <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Try it!</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div> */}
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${BigInt})` }} className=' group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-[#e5e5e5] tracking-wider gradient-text'>
                                Big Integer Library
                            </span>
                            {/* <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Try it!</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                                </a>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='spacer layer2'></div> */}


        </div>
    )
}

export default Work