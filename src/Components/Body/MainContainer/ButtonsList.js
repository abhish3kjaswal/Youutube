import React from 'react'
import Button from '../../Button'

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"];
const ButtonsList = () => {
  return (
    <div className="flex">
      {list &&
        list.length ?
        list.map((ele, i) => <Button key={i}>{ele}</Button>):""}
    </div>
  );
}

export default ButtonsList