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
import { useEffect } from 'react'
import { getCat, getCatCourses } from '../../../../services/operations/courseDetailsAPI'
import { useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'
import CourseCard from './CourseCard'


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
const { token } = useSelector((state) => state.auth)
const navigate = useNavigate()
const [isOpen, setIsOpen] = useState(false);
const [selCat,setSelCat] = useState("ALL");
const [cats,setCats] =  useState(null);
const [courses,setCourses] = useState(null);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};


const handleCourseDetails = (id) => {
  navigate(`/courses/${id}`);
};

useEffect(()=>{
  const fetchCat = async()=>{
    const res = await getCat(token);
    res.unshift({_id:1,name:"ALL"})
    setCats(res);
  }
  fetchCat()

},[])
useEffect(()=>{
  const fetchCatCourses = async()=>{
    const res = await getCatCourses(selCat,token);
    setCourses(res);
  }
  fetchCatCourses()

},[selCat])
{/* <div className='flex justify-center items-center'> 
    <button className=''>
    Sort By
    </button> 
</div> */}

  return (
    <section className='flex flex-col gap-5'>
      <div className='flex flex-row'>
      <div className='flex flex-col items-left justify-center gap-3 w-[80%]'>
      <h2 className='font-bold text-4xl'>Explore different category of courses..</h2>
      <h2 className='font-semibold text-3xl' >Explore To Learn and grow...</h2>
      </div>


      <div className="relative flex justify-center items-center">
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-[8px] flex flex-row justify-center items-center gap-2 bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 mb-8"
      >
      {selCat}<AiOutlineDown/>
      </button>

      {isOpen &&  (
        <div className="absolute right-0 mt-40 bg-[#2c2c6c] rounded-md shadow-lg">
           <ul className="py-1">
          {cats.map((cat)=>{
            return ( <li>
              <a onClick={()=>{setSelCat(cat.name); toggleDropdown()}} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{cat.name}</a>
            </li>)
          })}
        
          </ul>
        </div>
      )}
      </div>


      </div>
      { !courses?(
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      )
     :(courses.length==0?<div> No courses in this Category</div>
     
     :(<div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-7 mb-12">
     {
       courses.map((course)=>{
        return( <CourseCard course={course}/>)
       })
     }
     
      </div>))}
      {/* <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-7 mb-12"> */}
        {/* {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='border border-richblack-900 text-richblack-300 rounded-xl p-7  bg-[#2c2c6c] scroll-smooth hover:bg-transparent ease-in duration-300'>
          <div>
            <img src={image} alt={title} className='rounded-lg w-[300px] h-[200px]'/>
          </div>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold mt-2 text-xl'>{title}</h3>
            </div>
            <div className='flex flex-end'>
            <div className='flex justify-between align-bottom mt-4'>
            <a href={github} className='mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900'>Buy Now</a>
            <a  onClick={() => handleCourseDetails(id)} className='mt-6 rounded-[8px] bg-[#4db5ff] py-[8px] px-[12px] font-medium text-richblack-900 hover:cursor-pointer' target="__blank">Course Details</a>
            </div> 
            </div> 
            </article>
            )
            })} */}
        
      {/* </div> */}
    </section>
  )
}   

export default NewCourses
