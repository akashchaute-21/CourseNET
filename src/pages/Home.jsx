// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// import Banner from "../assets/Images/banner.mp4"
import Banner from "../assets/HomePage_Video.mp4"
import Footer from "../components/Common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full uppercase font-bold  drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105">
            <div className="flex flex-row items-center gap-2 rounded-full border-2 px-8 py-[5px] text-black hover:border-black hover:bg-pure-greys-700 hover:text-white transition duration-300 ease-in">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>


        <div className="flex flex-row">
        <div className="flex flex-col w-[50%] items-center justify-center">
          {/* Heading */}
        <div className="text-center text-caribbeangreen-100 text-4xl font-semibold w-[80%] justify-center">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>
        {/* Sub Heading */}
        <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-300 justify-center">
        Unleash your coding potential with our online courses. Learn at your own pace, from anywhere in the world. Gain access to a wide range of resources, hands-on projects, quizzes, and personalized instructor feedback.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7 items-center justify-center">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
        </div>

        {/* Video */}
        <div className="w-[50%] flex items-center justify-center">
        <div className="flex shadow-[10px_-5px_50px_-5px] shadow-[#4db5ff] w-[45%] justify-end">
          <video
            className="rounded-lg"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
        </div>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl text-pure-greys-400 font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
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

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="w-[100%] text-4xl text-pure-greys-400 font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Dive right in and start writing real code from day one in our immersive learning environment. Experience the thrill of practical learning and unleash your coding potential."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-25 text-richblack-700">

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
