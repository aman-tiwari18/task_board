import React, { useState, useEffect } from "react";
// {
//   onClose, onSave, editedTask;
// }
const EditTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    // If an editedTask is passed, populate the fields with its details
    if (props.editedTask) {
      setTitle(props.editedTask.name);
      setDescription(props.editedTask.description);
      setTeam(props.editedTask.team);
      setAssignee(props.editedTask.assignee);
      setPriority(props.editedTask.priority);
      setStatus(props.editedTask.status);
    }
  }, [props.editedTask]);

  console.log(props.editedTask);

  const handleSave = () => {
    const updatedTask = {
      id: props.editedTask.id, // Assuming you have an ID to identify the task
      name: title,
      description,
      team,
      assignee,
      priority,
      status,
    };
    console.log(updatedTask);

    props.onSave(updatedTask);
    props.onClose(); // Close the modal
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex-col flex justify-center items-center bg-white bg-opacity-50 z-10">
      <div className="flex justify-between items-center w-[400px] bg-white px-2">
        <h1 className="font-semibold"> EDIT TASK</h1>
        <div className="rounded-full border-1 border-gray-400 p-2">
          <button onClick={props.onClose}>X</button>
        </div>
      </div>
      <div className="bg-background w-[400px] p-2">
        {/* Task creation form */}
        <div className="flex flex-col gap-2">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            readOnly
            className="bg-inputcolor w-[250px] p-1 rounded-md"
          />
          <label>Description:</label>
          <input
            type="text"
            value={description}
            readOnly
            className="bg-inputcolor w-[250px] p-1 rounded-md"
          />
          <label>Team:</label>
          <input
            type="text"
            value={team}
            readOnly
            className="bg-inputcolor w-[250px] p-1 rounded-md"
          />
          <label>Assignee:</label>
          <input
            type="text"
            value={assignee}
            readOnly
            className="bg-inputcolor w-[250px] p-1 rounded-md"
          />
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-2 rounded-md bg-inputcolor text-gray-500"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-2 rounded-md bg-inputcolor text-gray-500"
          >
            <option value="pending">pending</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deffered">Deffered</option>
          </select>
        </div>
      </div>

      {/* Save button */}
      <button
        className="bg-buttoncolor px-2 rounded-md mt-2"
        onClick={handleSave}
      >
        Update Task
      </button>
    </div>
  );
};

export default EditTask;
