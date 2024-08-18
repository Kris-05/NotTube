import React, { useState } from 'react'
import './_category.scss'

const keywords = [
  'All',
  'DSA',
  'Java',
  'React js',
  'Angular js',
  'React Native',
  'Use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Tamil Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Tamil Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
]

const CategoryBar = () => {

  const [activeElement, setActiveElement] = useState('All')
  const handleClick = value => {
    setActiveElement(value)
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
