import React, { useState } from 'react'
import './_category.scss'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideoByCategory } from '../../redux/actions/videos.action'

const keywords = [
  'All',
  'DSA',
  'Java',
  'React js',
  'Angular js',
  'React Native',
  'Use of API',
  'Redux',
  'Anime',
  'One Piece',
  'Bleach',
  'Music',
  'Algorithm Art',
  'Bollywood Songs',
  'Tamil Songs',
  'Coding',
  'Chess',
  'Sports',
  'Real Madrid',
]

const CategoryBar = () => {

  const [activeElement, setActiveElement] = useState('All')

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)
    // console.log(value)
    if(value === 'All')
      dispatch(getPopularVideos())
    else
      dispatch(getVideoByCategory(value))
  }
  return (
    <div className='category-bar'>
      {keywords.map((value,i) => (
          <span 
            onClick={()=>handleClick(value)}
            key={i}
            className={activeElement === value ? 'active' : ''}>
            {value}
          </span>
        ))}
    </div>
  )
}

export default CategoryBar
