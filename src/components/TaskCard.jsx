import React, { useState } from "react";
import logo from "../assets/vertical-dot-button.png";
import EditTask from "./EditTask";
import EditDeleteModal from "./EditDelete";

const TaskCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditTask = (updatedTask) => {
    const editedTask = props.taskList.map((temp) => {
      if (temp.id === updatedTask.id) {
        return updatedTask;
      }
      return temp;
    });

    props.setTasks(editedTask);
    toggleModal();
  };

  return (
    <div className="w-full h-full py-1 ">
      <div className="bg-gray-200 rounded-md w-full h-full ">
        <div className="flex justify-between items-center px-2 py-1">
          <div className="font-medium text-xl">{props.title}</div>
          <div className="bg-buttoncolor text-white text-sm rounded-sm px-1   ">
            {props.priority}
          </div>
        </div>
        <hr className="border-1 border-gray-500 mr-2 ml-2 " />
        <p className="text-[11px]  px-2">{props.description}</p>

        <div className="flex justify-between items-center px-2 py-1">
          <div className="text-md py-1">@{props.assignee}</div>
          <button
            className="bg-buttoncolor w-[22px] h-[20px] flex justify-center p-1 items-center rounded-sm"
            onClick={toggleModal}
          >
            <img src={logo} alt="logo" />
          </button>
          {isModalOpen && (
            <EditTask
              onClose={toggleModal}
              editedTask={props.task}
              onSave={handleEditTask}
            />
            // <EditDeleteModal
            //   onClose={toggleModal}
            //   editedTask={props.task}
            //   onSave={handleEditTask}
            // />
          )}
        </div>
        <div className="px-2  ">
          <button className="bg-buttoncolor text-md text-white rounded-md px-4 font-medium  py-[1px] ">
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
