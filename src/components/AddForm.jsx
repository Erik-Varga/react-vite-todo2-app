import React, { useState } from 'react'

// library imports
import { CiSquarePlus } from "react-icons/ci";

const CustomForm = ({ addTask }) => {
    const size = 35;
    const [task, setTask] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    }

  return (
      <form
        className='todo'
        onSubmit={handleFormSubmit}
        >

        <span className='font-semibold ml-1'>Add Task</span>
        <div className="wrapper">
            {/* <label htmlFor="task">Title</label> */}

            <input 
            type="text" 
            id="task"
            className='w-full border p-2 mb-2 rounded'
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Add Task'
            />
        </div>
        <div className='flex justify-center items-center'>
            <button
                className='flex justify-center items-center gap-2 m-2 bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-700 hover:shadow-md'
                aria-label='Add Task'
                type='submit'
            >
                <CiSquarePlus size={size} />
                Add Task
            </button>
        </div>
    </form>
  )
}

export default CustomForm