import React, { useEffect } from 'react'
import useUnslashStore from '../../store/unsplash/Unsplash'
import Fotos from './fotos/Fotos';
import img from "../../assets/unsplashPage_bg.avif"
import "./style.scss"
export default function UnsplashPage() {
  const { getUnsplash, unsplash } = useUnslashStore()
  console.log(unsplash);
  useEffect(() => {
    getUnsplash()
  }, [])
  return (
    <div className='unsplashPage'>
      <div className='unsplashPage_header'>
        <img src={img} alt="img" />
        <div className='unsplashPage_text'>
          <h6>Premium, ready to use images. Get <span>unlimited</span> access.</h6>
          <div className='text'>
            <p>Members-only content added monthly</p>
            <p>Enhanced legal protections</p>
            <p>Unlimited royalty-free downloads</p>
          </div>
          <h1>$12 <span>$4 <span className='text-[14px]'>USD Per month*</span></span></h1>
          <button>Get <span>Unsplash+</span></button>
          <p>*when paid annually, billed upfront $48
            Renews automatically. Cancel anytime.</p>
        </div>
      </div>
      <div className='unsplashPage_main'>
        <Fotos universal={unsplash} />
      </div>
    </div>
  )
}
