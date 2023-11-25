import React from 'react'
import Button from '../../Button'

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"];
const ButtonsList = () => {
  return (
    <div className="flex">
      {list.map((ele, i) => (
        <Button>{ele}</Button>
      ))}
    </div>
  );
}

export default ButtonsList