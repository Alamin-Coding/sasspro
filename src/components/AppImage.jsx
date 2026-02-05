import React from 'react'

const AppImage = ({img}) => {
  return (
    <div>
        <img className='max-w-32' src={img} alt="image" />
    </div>
  )
}

export default AppImage