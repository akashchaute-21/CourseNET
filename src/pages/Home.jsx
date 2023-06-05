import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import CTAButton from '../components/core/HomePage/Button'
import HighlightText from '../components/core/HomePage/HighlightText'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'

function Home() {
  return (
    <div>
      {/* Section 1 */}
        <div className='relative mx-auto flex flex-col w=11/12 max-w-maxContent items-center text-white justify-between'>
            <Link to={"/signup"}>
                <div className='group: mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>

                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become a instructor</p>
                        <FaArrowRight/>
                    </div>

                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-6'>
              Empower Your Future
              <HighlightText text={"Coding Skills"}/>
            </div>
            
           <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo consequatur quaerat deserunt porro ipsum, temporibus voluptatum perferendis. Amet, minima nam? Sed porro enim ducimus quidem cum qui corrupti, aperiam vel.
           </div>

           <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}>
                Learn More
            </CTAButton>

            <CTAButton>
                Book a Demo
            </CTAButton>
           </div>
          <div className='mx-3 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
            <source src={Banner} type='video/mp4'/>
            </video>
          </div>
        
        {/* Code Section 1 */}
        <div>
          <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your 
              <HighlightText text={"coding potential"}/>
              with our online courses 
            </div>
          }   
          subheading={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet voluptatum vel sint ipsam! Cumque vero quia aliquam dolorem veniam commodi nostrum quo in voluptatum, illo praesentium dolore at accusamus."
          }
          ctabtn1={
            {
              btnText: "Try it yourself",
              linkto: "signup",
              active: true,
            }
          }
          ctabtn2={
            {
              btnText: "Learn More",
              linkto: "login",
              active: false,
            }
          }

          codeblock={`<<!DOCTYPE html>\n<html>\n<head>\n<meta name="stylesheet" content="styles/boot\nstyleattribute src=\"http://fonts.google\n</style>\n</head>\n<body>\n</body>\n</html>`}
           
          />
        </div>
        
        {/* Code Section 1 */}
        <div>
          <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your 
              <HighlightText text={"coding potential"}/>
              with our online courses 
            </div>
          }   
          subheading={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet voluptatum vel sint ipsam! Cumque vero quia aliquam dolorem veniam commodi nostrum quo in voluptatum, illo praesentium dolore at accusamus."
          }
          ctabtn1={
            {
              btnText: "Try it yourself",
              linkto: "signup",
              active: true,
            }
          }
          ctabtn2={
            {
              btnText: "Learn More",
              linkto: "login",
              active: false,
            }
          }

          codeblock={`<<!DOCTYPE html>\n<html>\n<head>\n<meta name="stylesheet" content="styles/boot\nstyleattribute src=\"http://fonts.google\n</style>\n</head>\n<body>\n</body>\n</html>`}
           
          />
        </div>
          
          <ExploreMore/>

        </div>


      {/* Section 2 */}
          <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center  justify-between
                 gap-5 mx-auto '>
                    <div className='h-[150px] '></div>
                    <div className='flex flex-row gap-7 text-white'>
                      <CTAButton active={true} linkto={"signup"}>
                        <div className='flex items-center gap-3'>
                          Explore Full Catalog
                          <FaArrowRight/>
                        </div>
                      </CTAButton>

                      <CTAButton active={false} linkto={"signup"}>
                        <div>
                          Learn More
                        </div>
                      </CTAButton>
                    </div>

                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                      Get the skills you need for a
                      <HighlightText text={"Job that is in demand"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sit omnis sequi exercitationem commodi ullam ut animi officia veritatis magnam, necessitatibus eligendi! Magnam assumenda quaerat delectus ipsum saepe! Possimus, eos.
                        </div>
                    <CTAButton active={true} linkto={"/signup"}>
                      <div>
                        Learn More
                      </div>
                    </CTAButton>
                      </div>
                </div>

            <TimeLineSection/>

            <LearningLanguageSection/>
             
            </div>
          </div>


      {/* Section 3 */}
          <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8
                          bg-richblack-900 text-white'>
                
                <InstructorSection/>

                <h2>Review from other Learners</h2>
                {/* Review Slider */}

          </div>


      {/* Footer */}



    </div>
  )
}

export default Home
