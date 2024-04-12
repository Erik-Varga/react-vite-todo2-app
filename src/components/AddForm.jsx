import React, { useState } from 'react'

// library imports
import { CiSquarePlus } from "react-icons/ci";

const CustomForm = ({ addTask }) => {
    const size = 40;
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
        <div className='flex'>
            <div className='flex-1 flex justify-center items-center gap-2'>
                <input 
                type="text" 
                id="task"
                className='w-full border p-2 mb-2 rounded'
                value={task}
                onInput={(e) => setTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder='Enter Title'
                />
            </div>
            <div className=''>
                <button
                    className='flex items-center p-1 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    aria-label='Add Task'
                    type='submit'
                >
                    <CiSquarePlus size={size} />
                    {/* Add Task */}
                </button>
            </div>
        </div>
    </form>
  )
}

export default CustomForm