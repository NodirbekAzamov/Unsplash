import React, { useEffect } from 'react'
import Fotos from '../fotos/Fotos'
import useSearchStore from '../../../store/search/Search'

export default function SearchPage({inputValue}) {
  const {getSearch, search} = useSearchStore()
  useEffect(() => {
    getSearch(inputValue)
  }, [])
  return (
    <div>
      <div className='searchPage_main'>
        <Fotos universal={search}/>
      </div>
    </div>
  )
}



