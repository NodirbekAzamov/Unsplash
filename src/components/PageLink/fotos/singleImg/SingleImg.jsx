import React, { useState } from 'react'
import "./style.scss"
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FaHeart } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { SlActionRedo } from "react-icons/sl";
import { IoMdInformationCircle } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

export default function SingleImg({ universal, setImageIndex, imgIndex, single_active, setSingle_active }) {
  const [activeHeart, setActiveHeart] = useState("")

  const toggleHeart = () => {
    setActiveHeart(prev => {
      const updatedHearts = [...prev];
      updatedHearts[imgIndex] = !updatedHearts[imgIndex];
      return updatedHearts;
    });
  };

  const handleChange = () => {
    setSingle_active(false)
  }

  return (
    <div className={`${single_active ? "singleImg" : " hidden"}`}>
      <div><SlArrowLeft className=' cursor-pointer text-[20px] font-[700] text-[#fff]' /></div>
      <div onClick={handleChange} className='absolute top-[15px] left-[20px] text-[#fff] cursor-pointer text-[25px] font-[900]'><RxCross1 /></div>
      <div className='singleImg_main'>
        <div className='single_navber'>
          <div className='single_nav-right'>
            <img src={universal[imgIndex]?.user?.profile_image?.small} alt="img" className=' h-[50px] w-[50px] object-cover rounded-[50%]' />
            <div>
              <p className=' m-0 text-[14px] text-[#000]'>{universal[imgIndex]?.user?.name}</p>
              <p className=' m-0 text-[14px] text-[#000]'>Made to Change</p>
            </div>
          </div>
          <div className='single_nav-left'>
            <button onClick={toggleHeart} className={` ${activeHeart[imgIndex] ? "bg-[red] text-[#fff] " : "bg-white "} flex justify-center border items-center rounded-[5px] w-[40px] h-[35px] opacity-[0.9] hover:opacity-[1] `} >
              <FaHeart className='text-[20px]  ' />
            </button>
            <button className=' bg-white flex justify-center items-center border rounded-[5px] w-[40px] h-[35px]'><IoIosAdd className='text-[25px]' /></button>
            <button className='border py-[4px] px-[8px] rounded-[5px]'>Download</button>
          </div>
        </div>
        {/* <img src={universal[imgIndex]?.urls?.raw} alt="img" className='img' /> */}
        <div className='single_section'>
          <div className='sengle_section-left'>
            <button>Views</button>
            <button>Downloads</button>
          </div>
          <div className='sengle_section-right'>
            <button><SlActionRedo className='text-[#9d9b9b]' />Share</button>
            <button><IoMdInformationCircle />Info</button>
            <button><HiDotsHorizontal className=' text-[20px] ' /></button>
          </div>
        </div>
      </div>
      <div><SlArrowRight className=' cursor-pointer text-[20px] font-[700] text-[#fff]' /></div>
    </div>
  )
}
