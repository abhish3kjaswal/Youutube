import React from 'react'

const Button = ({children, extClass}) => {
  return (
    <div>
      <button className={"px-4 py-1 m-2  rounded-lg " + extClass}>
        {children}
      </button>
    </div>
  );
}

export default Button