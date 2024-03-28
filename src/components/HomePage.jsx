import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./HomePage.css";
import Category from "./Category";
import TaskCard from "./TaskCard";
import NewTask from "./NewTask";

const HomePage = () => {
  const [value, onChange] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tasks, setTasks] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSaveTask = (newTask) => {
    setTasks([...tasks, { ...newTask, status: "pending" }]);
    toggleModal();
  };

  console.log(tasks);

  return (
    <div className="w-full h-full border-2 border-white border-solid p-4 rounded-lg">
      <div className="flex justify-between px-4">
        <div className="flex justify-around gap-10">
          <div className="text-xl font-medium">Filter By:</div>
          <input
            name="Assignee name"
            placeholder="Assignee name"
            className="bg-white rounded-lg px-2"
          />

          <div>
            <select className="px-2   rounded-md text-gray-500">
              <option value="" className="text-gray-300">
                Priority
              </option>
              <option value="P0">P0</option>

              <option value="P1">P1</option>

              <option value="P2">P2</option>
            </select>
          </div>

          <div className="bg-white rounded-lg px-2">
            <DatePicker
              onChange={onChange}
              value={value}
              clearIcon={null}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YY"
              className="react-date-picker__wrapper"
            />
          </div>
        </div>
        <button
          className="bg-blue-800 flex justify-center items-center px-10 text-white rounded-md"
          onClick={toggleModal}
        >
          Add new task
        </button>
        {isModalOpen && (
          <NewTask onClose={toggleModal} onSave={handleSaveTask} task={tasks} />
        )}
      </div>

      <div className="flex gap-12 p-4">
        <div className="text-xl font-semibold">Sort By:</div>
        <div>
          <select className="px-2   rounded-md text-gray-500">
            <option value="" className="text-gray-300">
              Priority
            </option>
            <option value="P0">P0</option>

            <option value="P1">P1</option>

            <option value="P2">P2</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between  w-full p-4 h-[480px] gap-5">
        <div className="w-1/5  bg-white flex flex-col  items-center rounded-md overflow-y-auto no-scrollbar">
          <div className="sticky top-0 w-full">
            <Category status="pending" />
          </div>
          <div className="w-full p-2 h-[170px]">
            {tasks.map(
              (temp, index) =>
                temp.status === "pending" && (
                  <TaskCard
                    title={temp.name}
                    priority={temp.priority}
                    description={temp.description}
                    assignee={temp.assignee}
                    task={temp}
                    taskList={tasks}
                    setTasks={setTasks}
                    key={temp.id}
                  />
                )
            )}
          </div>
        </div>
        <div className=" w-1/5 bg-white flex flex-col  items-center rounded-md overflow-y-auto no-scrollbar ">
          <div className="sticky top-0 w-full">
            <Category status="In progress" />
          </div>
          <div className="w-full p-2 h-[170px]">
            {tasks.map(
              (temp, index) =>
                temp.status === "In progress" && (
                  <TaskCard
                    title={temp.name}
                    priority={temp.priority}
                    description={temp.description}
                    assignee={temp.assignee}
                    task={temp}
                    taskList={tasks}
                    setTasks={setTasks}
                    key={temp.id}
                  />
                )
            )}
          </div>
        </div>

        <div className=" w-1/5 bg-white flex flex-col  items-center rounded-md overflow-y-auto no-scrollbar">
          <div className="sticky top-0 w-full">
            <Category status="Completed" />
          </div>
          <div className="w-full p-2 h-[170px]">
            {tasks.map(
              (temp, index) =>
                temp.status === "Completed" && (
                  <TaskCard
                    title={temp.name}
                    priority={temp.priority}
                    description={temp.description}
                    assignee={temp.assignee}
                    task={temp}
                    taskList={tasks}
                    setTasks={setTasks}
                    key={temp.id}
                  />
                )
            )}
          </div>
        </div>
        <div className=" w-1/5 bg-white flex flex-col  items-center rounded-md overflow-y-auto no-scrollbar">
          <div className="sticky top-0 w-full">
            <Category status="Deployed" />
          </div>

          <div className="w-full p-2 h-[170px]">
            {tasks.map(
              (temp, index) =>
                temp.status === "Deployed" && (
                  <TaskCard
                    title={temp.name}
                    priority={temp.priority}
                    description={temp.description}
                    assignee={temp.assignee}
                    task={temp}
                    taskList={tasks}
                    setTasks={setTasks}
                    key={temp.id}
                  />
                )
            )}
          </div>
        </div>
        <div className="w-1/5 bg-white flex flex-col  items-center rounded-md overflow-y-auto no-scrollbar">
          <div className="sticky top-0 w-full">
            <Category status="Deffered" />
          </div>
          <div className="w-full p-2 h-[170px]">
            {tasks.map(
              (temp, index) =>
                temp.status === "Deffered" && (
                  <TaskCard
                    title={temp.name}
                    priority={temp.priority}
                    description={temp.description}
                    assignee={temp.assignee}
                    task={temp}
                    taskList={tasks}
                    setTasks={setTasks}
                    key={temp.id}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
