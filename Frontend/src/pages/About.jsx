import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.png"
import BannerImage2 from "../assets/Images/aboutus3.png"
import Footer from "../components/Common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"

import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
 
const About = () => {
  return (
    <div>
      <section>
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-tblue2">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          Pioneering Online Education for a 
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-tblue2 lg:w-[95%]">
            CourseNET is revolutionizing online education, delivering cutting-edge courses, and empowering learners worldwide. With innovation, emerging technologies, and a vibrant community, we shape a brighter future for education. Embrace new possibilities and shape your own educational journey with us.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-45%] translate-y-[30%] grid-cols-2 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            {/* <img src={BannerImage2} alt="" /> */}
            <img src={BannerImage2} alt="" />
          </div>
        </div>
      </section>

      <section className=" border-richblack-700 bg-tyellow2">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section className="bg-twhite">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between text-richblack-500">
          <div className="flex flex-col items-center lg:flex-row justify-between">
          
            <div className="flex mx-auto mt-14">
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-blue-300 w-[80%] "
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section>
      
        <div className=" mx-auto mt-20 mb-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <ContactFormSection />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
