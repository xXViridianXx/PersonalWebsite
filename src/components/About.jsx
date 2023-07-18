import React from 'react'
import Spiderman from '../assests/spiderman.png'
// import Aniket from '../assests/Aniket.png'
// const About = () => {
//     return (
//         <div name='about' className='w-full h-screen bg-[#000000]'>
//             <div className='flex flex-col justify-center items-center w-full h-full'>
//                 <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
//                     <div>
//                         <div className='text-4xl sm:text-left pb-8 pl-8 sm:text-7xl'>
//                             <p className='inline font-bold text-[#e5e5e5]'>About <span id="me" className='text-[#95d5b2]'>Me </span></p>
//                         </div>
//                         <div>
//                             <p className='text-[#e5e5e5] pb-8 px-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint accusantium non velit illum adipisci voluptate facilis ratione, eum reprehenderit dolore blanditiis animi at maxime, distinctio quas deleniti, fugit nam?</p>
//                         </div>
//                     </div>
//                     <img src={Aniket} className=" w-40 flex justify-center items-cent sm:w-90 sm:rounded-lg" alt="Aniket Pratap" />
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default About

import Aniket from '../assests/Aniket.png'; // Import your image

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] lower-text'>



      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full '>
          <div>
            <div className='text-4xl sm:text-left pb-8 pl-8 sm:text-7xl lower-text'>
              <p className='inline font-bold text-[#e5e5e5]'>About <span id="me" className='gradient-text'>Me </span></p>
            </div>
            <div>
              <p className='text-[#e5e5e5] pb-8 px-8 text-2xl'>I'm a <span className='gradient-text font-bold'>Swashbuckling </span>
                Computer Science Student at the University of California Irvine and I wake up every <span className='gradient-text font-bold'>morning </span> thinking,
                what <span className='gradient-text font-bold'>haven't</span> people done yet?
                Well, the <span className='gradient-text font-bold'>answer</span> is a lot of things so I go back to <span className='gradient-text font-bold'>sleep...</span>

              </p>

              <p className='text-[#e5e5e5] pb-8 px-8 text-2xl'> <span className='gradient-text font-bold'>Jokes</span> aside, I am <span className='gradient-text font-bold'>enthusiastic </span>
                about making things that spread <span className='gradient-text font-bold'>joy</span>
              </p>

              <p className='text-[#e5e5e5] pb-8 px-8 text-2xl'>I <span className='gradient-text font-bold'>accomplish</span> this by building <span className='gradient-text font-bold'>software</span> that's simple, <span className='gradient-text font-bold'>innovative</span> and fun to use</p>
              <p className='text-[#e5e5e5] pb-8 px-8 text-2xl'>And I also like making <span className='gradient-text font-bold'>music</span> on FL Studio</p>
              <p className='text-[#e5e5e5] pb-8 px-8 text-2xl'>Not to mention going outside and touching <span className='gradient-text font-bold'>grass</span></p>

            </div>

          </div>
          {/* <div className='w-[200px] sm:w-auto flex justify-center items-center sm:rounded-lg mx-auto lower-text pr-8'>
            <img src={Aniket} alt="Aniket Pratap" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
