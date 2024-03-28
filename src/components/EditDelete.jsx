import { useState } from "react";
import EditTask from "./EditTask";

// {
//   onEdit, onDelete, onClose;
// }

const EditDeleteModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEdit = () => {
    setEditOpen(!isEditOpen);
    props.onClose();
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={toggleModal}
          >
            Edit
          </button>
          {isModalOpen && (
            <EditTask
              onClose={toggleEdit}
              editedTask={props.task}
              onSave={handleEditTask}
            />
          )}
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditDeleteModal;
