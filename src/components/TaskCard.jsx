import React, { useState } from "react";
import logo from "../assets/vertical-dot-button.png";
import EditTask from "./EditTask";

const TaskCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const close = () => {
    setIsModalOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
  };
  const toggleEdit = () => {
    setEditOpen(!isEditOpen);
  };

  const toggleDelete = () => {
    setDeleteOpen(!isDeleteOpen);
  };

  const handleEditTask = (updatedTask) => {
    const editedTask = props.taskList.map((temp) => {
      if (temp.id === updatedTask.id) {
        return updatedTask;
      }
      return temp;
    });

    props.setTasks(editedTask);
    close();
  };

  const handleDeleteTask = () => {
    const updatedTaskList = props.taskList.filter(
      (temp) => temp.id !== props.task.id
    );

    props.setTasks(updatedTaskList);
    close();
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
            onClick={toggleEdit}
          >
            <img src={logo} alt="logo" />
          </button>
          {isEditOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-400 bg-opacity-50 z-50">
              <div className="bg-gray-400  rounded-lg">
                <div className="flex flex-col   text-black">
                  <button
                    className="   pr-20 px-3 hover:bg-buttoncolor py-2 rounded-md "
                    onClick={toggleModal}
                  >
                    Edit
                  </button>
                  <hr className="border-1 border-white  px-2  mx-3 " />
                  {isModalOpen && (
                    <EditTask
                      onClose={close}
                      onSave={handleEditTask}
                      editedTask={props.task}
                    />
                  )}
                  <button
                    className="  pr-12 hover:bg-red-500 py-2 rounded-md"
                    onClick={toggleDelete}
                  >
                    Delete
                  </button>
                  {isDeleteOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                      <div className="flex justify-between items-center w-[300px] bg-white px-4">
                        <h1 className="font-bold"> EDIT TASK</h1>
                        <div className="rounded-full border-1 border-gray-400 p-2">
                          <button onClick={close}>X</button>
                        </div>
                      </div>
                      <div className="bg-background p-4   w-[300px]">
                        <p className="text-md mb-4">
                          Do You wish to delete Task
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-md">
                            {" "}
                            {props.task.name}{" "}
                          </div>
                          <div className="flex gap-6">
                            <button
                              className="bg-buttoncolor  text-white px-6   rounded-sm "
                              onClick={handleDeleteTask}
                            >
                              Yes
                            </button>
                            <button
                              className="bg-buttoncolor  text-white px-6  rounded-sm"
                              onClick={close}
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  // onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
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
