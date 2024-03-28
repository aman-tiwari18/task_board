import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ onClose, onSave, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");

  console.log(task);

  const handleSave = () => {
    onSave({
      id: uuidv4(),
      name: title,
      description,
      team,
      assignee,
      priority,
    });
    setTitle("");
    setDescription("");
    setTeam("");
    setAssignee("");
    setPriority("P0");
    onClose(); // Close the modal
  };

  //   const pendingTasks = tasks.filter((task) => task.category === "pending");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex-col flex justify-center items-center bg-white bg-opacity-50 z-10">
      <div className="flex justify-between items-center w-[400px] bg-white px-2">
        <h1 className="font-semibold"> CREATE A TASK</h1>
        <div className="rounded-full border-1 border-gray-400 p-2">
          <button onClick={onClose}>X</button>
        </div>
      </div>
      <div className="bg-background w-[400px] p-2">
        <div className="flex justify-between p-3">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            className="bg-inputcolor w-[250px]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-3">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            className="bg-inputcolor h-12 w-[250px]"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-3">
          <label>Team:</label>
          <input
            type="text"
            value={team}
            className="bg-inputcolor w-[250px]"
            onChange={(e) => setTeam(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-3">
          <label>Assignee:</label>
          <input
            type="text"
            value={assignee}
            className="bg-inputcolor w-[250px]"
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="flex justify-between p-3 ">
          <label>Priority:</label>
          <div>
            <select
              className="px-2   rounded-md text-gray-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="P0">P0</option>

              <option value="P1">P1</option>

              <option value="P2">P2</option>
            </select>
          </div>
          <button
            className="bg-buttoncolor px-2 rounded-md"
            onClick={handleSave}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
