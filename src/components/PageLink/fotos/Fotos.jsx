import React, { useState } from 'react'
import "../fotos/fotos.scss"
import { FaHeart } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { HiArrowDown } from 'react-icons/hi';
export default function Fotos({ universal }) {
    const [activeHeart, setActiveHeart] = useState([])
    const toggleHeart = (index) => {
        setActiveHeart(prev => {
            const updatedHearts = [...prev];
            updatedHearts[index] = !updatedHearts[index];
            return updatedHearts;
        });
    };

    let num = universal.length;
    let length1 = parseInt(num / 3);
    let length2 = parseInt((num / 3) * 2);
    let editorialfilter1 = universal.filter((item, index) => index < length1);
    let editorialfilter2 = universal.filter(
        (item, index) => index < length2 && length1 <= index
    );
    let editorialfilter3 = universal.filter((item, index) => index >= length2);
    return (
        <div className=' fotos'>
            <div className='fotos_main '>
                {
                    editorialfilter1?.map((item, index) => {
                        return <div key={index} className='div_big  min-h-[100px] '>
                            <img src={item?.urls?.raw} alt="img"  className=' w-[100%] ' />
                            <div className='fotos_hover p-[20px] '>
                                <div className='flex justify-end gap-[15px]'>
                                    <button onClick={() => toggleHeart(index)} className={` ${activeHeart[index] ? "bg-[red] text-[#fff] " : "bg-white "} flex justify-center items-center rounded-[5px] w-[35px] h-[35px] opacity-[0.9] hover:opacity-[1] `} >
                                        <FaHeart className='text-[20px]  ' />
                                    </button>
                                    <button className=' bg-white flex justify-center items-center rounded-[5px] w-[35px] h-[35px]'><IoIosAdd className='text-[25px]' /></button>
                                </div>

                                <div className=' flex justify-between items-center '>
                                    <div className='flex items-center  gap-[5px]'>
                                        <img src={item?.user?.profile_image?.large} alt="img" className=' h-[30px] w-[30px] rounded-[50%]' />
                                        <div>
                                            <p className=' m-0 text-[14px] text-[#fff]'>{item?.user?.name}</p>
                                            <p className=' m-0 text-[14px] text-[#fff]'>Made to Change</p>
                                        </div>
                                    </div>
                                    <button className='flex justify-center items-center rounded-[5px] bg-white  w-[35px] h-[35px]'><HiArrowDown /></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='fotos_main '>
                {
                    editorialfilter2?.map((item, index) => {
                        return <div key={index} className='div_big  min-h-[100px] '>
                            <img src={item?.urls?.raw} alt="img" className=' w-[100%] ' />
                            <div className='fotos_hover p-[20px] '>
                                <div className='flex justify-end gap-[15px]'>
                                    <button onClick={() => toggleHeart(index)} className={` ${activeHeart[index] ? "bg-[red] text-[#fff] " : "bg-white "} flex justify-center items-center rounded-[5px] w-[35px] h-[35px] opacity-[0.9] hover:opacity-[1] `} >
                                        <FaHeart className='text-[20px]  ' />
                                    </button>
                                    <button className=' bg-white flex justify-center items-center rounded-[5px] w-[35px] h-[35px]'><IoIosAdd className='text-[25px]' /></button>
                                </div>

                                <div className=' flex justify-between items-center'>
                                    <div className='flex items-center  gap-[5px]'>
                                        <img src={item?.user?.profile_image?.large} alt="img" className=' w-[30px] h-[30px] rounded-[50%]' />
                                        <div>
                                            <p className=' m-0 text-[14px] text-[#fff]'>{item?.user?.name}</p>
                                            <p className=' m-0 text-[14px] text-[#fff]'>Made to Change</p>
                                        </div>
                                    </div>
                                    <button className='flex justify-center items-center rounded-[5px] bg-white border w-[35px] h-[35px]'><HiArrowDown /></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='fotos_main '>
                {
                    editorialfilter3?.map((item, index) => {
                        return <div key={index} className='div_big  min-h-[100px] '>
                            <img src={item?.urls?.raw} alt="img" className=' w-[100%] ' />
                            <div className='fotos_hover p-[20px] '>
                                <div className='flex justify-end gap-[15px]'>
                                    <button onClick={() => toggleHeart(index)} className={` ${activeHeart[index] ? "bg-[red] text-[#fff] " : "bg-white "} flex justify-center items-center rounded-[5px] w-[35px] h-[35px] opacity-[0.9] hover:opacity-[1] `} >
                                        <FaHeart className='text-[20px]  ' />
                                    </button>
                                    <button className=' bg-white flex justify-center items-center rounded-[5px] w-[35px] h-[35px]'><IoIosAdd className='text-[25px]' /></button>
                                </div>

                                <div className=' flex justify-between items-center'>
                                    <div className='flex items-center  gap-[5px]'>
                                        <img src={item?.user?.profile_image?.large} alt="img" className=' w-[30px] h-[30px] rounded-[50%]' />
                                        <div>
                                            <p className=' m-0 text-[14px] text-[#fff]'>{item?.user?.name}</p>
                                            <p className=' m-0 text-[14px] text-[#fff]'>Made to Change</p>
                                        </div>
                                    </div>
                                    <button className='flex justify-center items-center rounded-[5px] bg-white border w-[35px] h-[35px]'><HiArrowDown /></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
