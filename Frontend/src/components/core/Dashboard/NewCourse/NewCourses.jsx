import React from 'react'
import { useState } from 'react';
import {AiOutlineDown} from 'react-icons/ai'
import { useEffect } from 'react'
import { getCat, getCatCourses } from '../../../../services/operations/courseDetailsAPI'
import { useSelector } from 'react-redux'
import CourseCard from './CourseCard'


function NewCourses() {
const { token } = useSelector((state) => state.auth)
const [isOpen, setIsOpen] = useState(false);
const [selCat,setSelCat] = useState("ALL");
const [cats,setCats] =  useState(null);
const [courses,setCourses] = useState(null);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
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

  return (
    <section className='flex flex-col gap-5'>

      <div className='flex flex-row justify-between'>
      <div className='flex flex-col'>
      <p className='font-bold flex  text-tblue2 text-4xl'>Explore different courses...</p>
      <p className='font-semibold flex text-tblue2 text-3xl' >Learn to grow...</p>
      </div>
      <div className='grid-cols-1 font-semibold text-tblue2 '>
        Sort By Categories:
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-full h-10 w-40 -translate-y-1 flex flex-row font-bold  justify-between items-center gap-2 bg-tblue2 py-[8px] px-[12px] text-tyellow2 "
      >
      {selCat}<AiOutlineDown/>
      </button>
        {isOpen &&  (
        <div className="absolute bg-tblue2 rounded-md shadow-lg">
           <ul className="py-1">
          {cats.map((cat)=>{
            return ( <li>
              <a onClick={()=>{setSelCat(cat.name); toggleDropdown()}} className="block px-4 py-2 text-tyellow2 hover:bg-gray-200">{cat.name}</a>
            </li>)
          })}
        
          </ul>
        </div>
      )}
      </div>
      </div>
    
     
    
      <div className="h-[1px] my-4 w-[1000px] bg-tblue2"></div>
      { !courses?(
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      )
     :(courses.length==0?<div> No courses in this Category</div>
     
     :(<div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-7 mb-12">
     {
       courses.map((course)=>{
        if(course.status!=="Draft")
        return( <CourseCard course={course}/>)
       })
     }
     
      </div>))}
    </section>
  )
}   

export default NewCourses
