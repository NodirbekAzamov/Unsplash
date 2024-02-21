import React, { useEffect, useState } from 'react'
import { FaSquarespace } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../PageLink/style.scss"
import img from "../../assets/plus-desktop.avif"
import { IoSearch } from "react-icons/io5";
import { MdControlCamera } from "react-icons/md";


import useEditorialStore from '../../store/editorial/Editorial';
import useCollectionsStore from '../../store/collections/Collections';
import Fotos from './fotos/Fotos';

export default function Editorial() {
    const { getEditorial, editorial } = useEditorialStore()
    const { getCollections, collections } = useCollectionsStore()
    useEffect(() => {
        getEditorial()
        getCollections()
    }, [])

    return (
        <div>
            <div className='editorial '>
                <div className='nav_left'>
                    <div className=' flex  items-end justify-between  '>
                        <div className='nav_text'>
                            <h1>Unsplash</h1>
                            <h6>The internet’s source for visuals.</h6>
                            <h6>Powered by creators everywhere.</h6>
                        </div>
                        <button className='flex gap-[5px] items-center py-[5px] px-[7px] font-[500] rounded-[5px] text-[#000] bg-[#dad7d7]  text-[12px]'>Supported by  <FaSquarespace className='text-[15px]' /> SQUARESPACE </button>
                    </div>
                    <div className="nav_inp">
                        <IoSearch className='text-[20px] cursor-pointer' />
                        <input type="text" placeholder='Search high-resolution image' />
                        <MdControlCamera className=' rotate-[45deg] text-[28px] font-[400] text-[#8f8c8c] cursor-pointer' />
                    </div>
                </div>
                <div className='nav_right'>

                    <div className='nav_right-card'>
                        <div className='flex justify-between mb-[10px]'>
                            <h6>Collections</h6>
                            <Link>See all</Link>
                        </div>
                        <div className='nav_right-boxs'>
                            {
                                collections?.map((item, index) => {
                                    return <div className='nav_box' key={index}>
                                        <img src={item.user.profile_image.small} alt="img" className='w-[35px] h-[35px] rounded-[5px] ' />
                                        <div>
                                            <p className='text-[14px] m-0'>{item.title}</p>
                                            <p className='text-[14px] m-0'>by {item.user.name}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className='nav_right-img'>
                        <div className=' h-[50%]'>
                            <h6>Discover Unsplash+</h6>
                            <p>Unlimited downloads Full legal protections No ads</p>
                        </div>
                        <img src={img} alt="img" className='h-[50%]' />
                    </div>
                </div>
            </div>

            <div className='editorial_map '>
                <Fotos  universal={editorial}/>
            </div>
        </div>
    )
}
