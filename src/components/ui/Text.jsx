import React from 'react'

export default function Text({children}) {
  return (
    <p className='text-lg font-thin text-justify'>{children}</p>
  )
}