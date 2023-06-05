import React from 'react'
import CTAButton from './Button'
import HighlightText from './HighlightText'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

function CodeBlocks({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor
}) {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>

      {/* Section 1 */}
      
      <div className='w-[50%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold'>
            {subheading}    
        </div>
        <div className='gap-7 flex mt-7'>
        <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
            <div className='flex gap-2 items-center'>
                {ctabtn1.btnText}
                <FaArrowRight/>
            </div>
        </CTAButton>
        <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                {ctabtn2.btnText}
        </CTAButton>
        </div>
      </div >
      {/* Section 2 */}
      <div className='h-fit flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'>
        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            {/* BGradient  */}
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </div>

        <div className={`w-[90%] flex flex-col gap-2 ${codeColor} font-mono font-bold`}>
            <TypeAnimation
            sequence={[codeblock,2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={
                {
                    whiteSpace: "pre-line",
                    display: "block",
                }
            }
            omitDeletionAnimation={true}
            />
        </div>
        </div>
    </div>
  )
}

export default CodeBlocks
