import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='px-4 py-1 m-2 bg-gray-200 rounded-lg'>
            {children}
        </button>
    </div>
  )
}

export default Button