"use client";
import { useState } from "react";

const TaskPage = () => {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title }]);
    setTitle("");
  };

  const handelDelete = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let renderTasks = <h2>No Task Here</h2>;

  if (mainTask.length > 0) {
    renderTasks = mainTask.map((task, index) => {
      return (
        <li
          key={index}
          className="flex justify-between items-center w-4/5 mt-2 "
        >
          <h2> {task.title} </h2>
          <button
            className="bg-red-600 p-2 rounded-md text-gray-100"
            onClick={() => {
              handelDelete(index);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div>
      <form className="flex justify-between w-4/5" onSubmit={handelSubmit}>
        <input
          type="text"
          className="border-2 rounded-xl w-96 h-10 outline-none px-3 text-xl"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-blue-700 px-4  text-gray-200 rounded-md ">
          Add
        </button>
      </form>
      <hr className="mt-8" />
      <div className="w-full flex items-center justify-center mt-20 text-xl">
        <ul className="w-full"> {renderTasks} </ul>
      </div>
    </div>
  );
};

export default TaskPage;
