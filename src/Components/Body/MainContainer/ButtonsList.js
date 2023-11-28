import React from "react";
import Button from "../../Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"];
const ButtonsList = () => {
  return (
    <div className="flex">
      {list && list.length
        ? list.map((ele, i) =>
            i == 0 ? (
              <Button key={i} extClass={"bg-gray-800 text-white"}>
                {ele}
              </Button>
            ) : (
              <Button key={i} extClass={"bg-gray-200"}>
                {ele}
              </Button>
            )
          )
        : ""}
    </div>
  );
};

export default ButtonsList;
