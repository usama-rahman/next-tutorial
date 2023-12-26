"use client";

import { useState } from "react";

const TaskPage = () => {
  const [title, setTitle] = useState("");

  const handelSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <div>
      <form className="flex justify-between w-4/5" onSubmit={handelSubmit}>
        <input
          type="text"
          className="border-2 rounded-xl w-96 h-10 outline-none px-3 text-xl"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <button className="bg-blue-700 px-4  text-gray-200 rounded-md ">
          Add
        </button>
      </form>
      <hr className="mt-8" />
    </div>
  );
};

export default TaskPage;
