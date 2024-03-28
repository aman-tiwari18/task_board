import React from "react";

const getColorClass = (color) => {
  switch (color) {
    case "Deffered":
      return "bg-red-500";
    case "Deployed":
      return "bg-blue-500";
    case "Completed":
      return "bg-green-500";
    case "In progress":
      return "bg-yellow-400";
    default:
      return "bg-gray-500";
  }
};

const CategoryBar = (props) => {
  return (
    <div className="w-full  flex flex-col justify-center items-center rounded-md">
      <div
        className={` w-full items-center flex justify-center  font-medium text-white py-2 rounded-t-md ${getColorClass(
          props.status
        )}`}
      >
        <div>{props.status}</div>
      </div>
    </div>
  );
};

export default CategoryBar;
