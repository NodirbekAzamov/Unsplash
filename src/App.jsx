import React, { useState } from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Editorial from './components/PageLink/Editorial'
import Following from './components/PageLink/Following'
import UnsplashPage from './components/PageLink/UnsplashPage'
import SearchPage from './components/PageLink/searchPage/SearchPage'
export default function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>



      <div className='h-[150px]'>
        <Header inputValue={inputValue} setInputValue={setInputValue}/>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Editorial />} />
          <Route path='following' element={<Following />} />
          <Route path='unsplashPage' element={<UnsplashPage />} />
          <Route path='searchPage' element={<SearchPage inputValue={inputValue} />} />
        </Routes>
      </div>
    </div>
  )
}


