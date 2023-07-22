// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// import Banner from "../assets/Images/banner.mp4"
import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/Common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"
import BG_IMG from "../assets/Images/background_img.png"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
        </Link>


        <div className="flex flex-row mt-20">
        <div className="flex flex-col w-[50%] items-center justify-center">
          {/* Heading */}
        <div className="text-center text-tblue2 text-4xl font-semibold w-[80%] justify-center">
          Update your skills
          <HighlightText text={"without limits"} />
        </div>
        {/* Sub Heading */}
        <div className="mt-3 w-[90%] text-center text-lg font-bold text-[#576875] justify-center">
        Our platform offers a vast array of courses taught by expert instructors, empowering you to achieve your full potential. Embrace lifelong learning and stay ahead in today's ever-evolving world.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7 items-center justify-center">
          <CTAButton active={true} linkto={"/signup"}>
            Explore Courses
          </CTAButton>
        </div>
        </div>

        {/* Image */}
        <div className="w-[50%] flex items-center justify-center">
        <div className="flex  justify-end">
          <img src={BG_IMG} alt="" />
        </div>
        </div>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl text-pure-greys-400 font-semibold">
                Harness the power of  
                <HighlightText text={"interactive learning"} /> experiences.
              </div>
            }
            subheading={
              "Learn from the Best: Our courses are crafted and instructed by industry experts with extensive coding experience, driven by their passion to impart knowledge to you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

      
      <div className={`flex flex-row my-20 justify-between lg:gap-10 gap-10`}>
      {/* Section 1  */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
          <div className="w-[100%] text-4xl text-pure-greys-400 font-semibold lg:w-[60%]">
                Enjoy the flexibility of <br />
                <HighlightText text={"self-paced learning"} />
          </div>

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
        "Dive right in and start writing real code from day one in our immersive learning environment. Experience the thrill of practical learning and unleash your coding potential."
           
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={true} linkto="/login">
            <div className="flex items-center gap-2">
              Continue Lesson
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={false} linkto="/login">
            Learn More
          </CTAButton>
        </div>
      </div>

        {/* Codes */}
        <div>
        <video
            className="rounded-lg h-[300px] shadow-xl shadow-pure-greys-200"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
    </div>

      </div>

      {/* Section 2 */}
      <div className="bg-twhite text-tblue2">

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
            Acquire in-demand skills for a{" "}
              <HighlightText text={"high-demand job."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
              CourseNET sets new standards where being a competitive specialist goes beyond professional skills, demanding a broader range of capabilities.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-blue-200">
        {/* Become a instructor section */}
        <InstructorSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
