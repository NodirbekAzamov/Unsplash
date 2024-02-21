import React, { useEffect, useRef, useState } from 'react'
import "../header/style.scss"
import { IoSearch } from "react-icons/io5";
import { MdControlCamera } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { TbBellRinging2Filled } from "react-icons/tb";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useSearchStore from '../../store/search/Search';
export default function Header({inputValue, setInputValue}) {
    const navRef = useRef()
    const [linkId, setLinkId] = useState(0.1)
    const navigate = useNavigate({})
    const [link, setLink] = useState([
        { id: 1, title: "Wallpapers" },
        { id: 2, title: "Nature" },
        { id: 3, title: "3D Renders" },
        { id: 4, title: "Travel" },
        { id: 5, title: "Architecture & Interiors" },
        { id: 6, title: "Textures & Patterns" },
        { id: 7, title: "Street Photography" },
        { id: 8, title: "Film" },
        { id: 9, title: "Archival" },
        { id: 10, title: "Experimental" },
        { id: 11, title: "Animals" },
        { id: 12, title: "Fashion & Beauty" },
        { id: 13, title: "People" },
        { id: 14, title: "Spirituality" },
        { id: 15, title: "Business & Work" },
        { id: 16, title: "Food & Drink" },
        { id: 17, title: " Health & Wellness" },
        { id: 18, title: "Sports" },
        { id: 19, title: "Current Events" },
    ])

    const scrollNav = (value) => {
        navRef.current.scrollLeft += value
    }

    const activeLink = (id) => {
        setLinkId(id)
        localStorage.setItem("id", id)
    }
    useEffect(() => {
        const id = localStorage.getItem("id")
        if (id) {
            setLinkId(id)
        } else {
            setLinkId(0.1)
        }
    }, [])

    // Search get
    const url = window.location.href.split("/").pop()
    const {getSearch} = useSearchStore()
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate("/searchPage")
            getSearch(inputValue)
        }
    };

    return (
        <div className='w-[100%]'>
            <header className='header'>
                <div className='header_manu'>
                    <div className='header_left'>
                        <Link to="/"><img src={logo} alt="logo" className='w-[32px] h-[32px] object-cover' /></Link>
                        <div className="header_inp">
                            <IoSearch className='text-[20px]' />
                            <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder='Search high-resolution image' />
                            <MdControlCamera className=' rotate-[45deg] text-[25px]' />
                        </div>
                    </div>
                    <div className='header_right'>
                        <Link to="/abvertise" >Advertise</Link>
                        <Link to="/blog" className=''>Blog</Link>
                        <Link to="/unsplash" className=''>Unsplash+</Link>
                        <button className=' whitespace-nowrap text-[12px] font-[300]' >Submit a photo</button>
                        {/* <Link className='ml-[20px]'>Login</Link> */}
                        <TbBellRinging2Filled className='rotate-[-60deg] text-[22px] text-[#4b4b4b]  hover:text-[#000] cursor-pointer ' />
                        <FaUserCircle className='text-[25px] text-[#e0e0e0ca]  cursor-pointer' />
                        <HiBars3 className='text-[23px]  cursor-pointer' />
                    </div>
                </div>

                <div className={`header_nav ${url == "searchPage" ? " hidden" : ""} `}>
                    <div className='header_nav-left'>
                        <Link to="/" onClick={() => activeLink(0.1)} className={`${linkId == 0.1 ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent"} pb-[17px]`}>Editorial</Link>
                        <Link to="/following" onClick={() => activeLink(0.2)} className={`${linkId == 0.2 ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent"} pb-[17px]`}>Following</Link>
                        <Link to="/unsplashPage" onClick={() => activeLink(0.3)} className={`${linkId == 0.3 ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent"} pb-[17px]`}>Unsplash+</Link>
                        <div className='header_stake ml-[15px] mb-[10px]'></div>
                    </div>

                    <div className='header_nav-right relative px-[0px]'>
                        <ul className='header_nav-ul  ' ref={navRef}>
                            <button onClick={() => scrollNav(-300)} className=' flex items-center text-[25px] left-[0] h-[60px] absolute  bg-white'><HiChevronLeft /></button>
                            <li onClick={() => activeLink(0.4)} className='flex flex-col ' >
                                <p className=' m-0 p-0 text-[10px]'>Featured </p>
                                <Link className={`${linkId == 0.4 ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent"} whitespace-nowrap text-[14px] pb-[17px]`}>Cool Tones</Link>
                            </li>
                            {
                                link?.map((item, index) => {
                                    return <li key={index} onClick={() => activeLink(item.id)} className={` ${linkId == item.id ? " border-b-[2px] border-[#000] " : " border-b-[2px] border-transparent "} pb-[17px] mt-[20px]  whitespace-nowrap`} >
                                        <Link to={item.id}>{item.title}</Link>
                                    </li>
                                })
                            }
                            <button onClick={() => scrollNav(300)} className=' flex items-center absolute right-[0px] bottom-[0] text-[30px] mb-[15px] w-[20px] h-[30px] bg-white'> <HiChevronRight /></button>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
