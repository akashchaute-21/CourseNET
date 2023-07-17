import React from 'react'
import IMG1 from '../../../../assets/NewCourses/portfolio1.gif'
import IMG2 from '../../../../assets/NewCourses/portfolio2.gif'
import IMG3 from '../../../../assets/NewCourses/portfolio3.png'
import IMG4 from '../../../../assets/NewCourses/portfolio4.png'
import IMG5 from '../../../../assets/NewCourses/portfolio5.png'
import IMG6 from '../../../../assets/NewCourses/portfolio6.jpg'
import IMG7 from '../../../../assets/NewCourses/portfolio7.png'
import IMG8 from '../../../../assets/NewCourses/portfolio8.png'
import { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'


const data = [
  {
    id:1, 
    image: IMG8,
    title: 'Prayaas-Social Club of VNIT Website',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  {
    id:2, 
    image: IMG1,
    title: 'Motion Planning- ground robot',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  {
    id:2, 
    image: IMG2,
    title: 'Quadcoptor Trajectory Follower',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  {
    id:3, 
    image: IMG3,
    title: 'Voice Assistant',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  {
    id:4, 
    image: IMG4,
    title: 'Extended Kalmaan Filter',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  {
    id:5, 
    image: IMG5,
    title: 'Path Planning',
    github: 'https://github.com/',
    demo: 'www.google.com'
  },
  
]
 

function NewCourses() {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

const navigate = useNavigate();

const handleCourseDetails = () => {
  navigate(`/courses/${id}`);
};

  return (
    <section className='flex flex-col gap-5'>
      <div className='flex flex-row'>
      <div className='flex flex-col items-center justify-center gap-3 w-[80%]'>
      <h2 className='font-bold text-6xl'>Our New Courses</h2>
      <h2 className='font-semibold text-3xl'>Explore To Learn</h2>
      </div>

      {/* <div className='flex justify-center items-center'> 
          <button className=''>
          Sort By
          </button> 
      </div> */}

      <div className="relative flex justify-center items-center">
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-[8px] flex flex-row justify-center items-center gap-2 bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 mb-8"
      >
        Sort By <AiOutlineDown/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-40 bg-[#2c2c6c] rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <a href="#a" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
            </li>
            <li>
              <a href="#b" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
            </li>
            <li>
              <a href="#c" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
            </li>
          </ul>
        </div>
      )}
      </div>


      </div>
      <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-7 mb-12">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='border border-richblack-900 text-richblack-300 rounded-xl p-7  bg-[#2c2c6c] scroll-smooth hover:bg-transparent ease-in duration-300'>
          <div>
            <img src={image} alt={title} className='rounded-lg w-[300px] h-[200px]'/>
          </div>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold mt-2 text-xl'>{title}</h3>
            </div>
            {/* <div className='flex flex-end'> */}
            <div className='flex justify-between align-bottom mt-4'>
            <a href={github} className='mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900'>Buy Now</a>
            <a  onClick={handleCourseDetails(id)} className='mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 ' target="__blank">Course Details</a>
            </div>
            {/* </div> */}
            </article>
            )
            }) 
        }
      </div>
    </section>
  )
}   

export default NewCourses
