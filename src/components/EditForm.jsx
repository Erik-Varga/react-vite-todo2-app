import React, { useEffect, useState } from 'react';

// library imports
import { MdEdit, MdDelete } from "react-icons/md";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
    const size = 30;
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
    // let navigate = useNavigate();
    

    useEffect(() => {
        const closeModalIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode();
        }

        window.addEventListener('keydown', closeModalIfEscaped)

        return () => {
            window.removeEventListener('keydown', closeModalIfEscaped)
        }
    }, [closeEditMode]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName});
    }

  return (
    <div
        role='dialog'
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
        <span className='font-semibold ml-1'>Edit Task</span>

        <form
        className='todo'
        onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            {/* <label htmlFor="task">Title</label> */}

            <input 
            type="text" 
            id="editTask"
            className='w-full border p-2 mb-2 rounded-sm dark:text-black'
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='Edit Task'
            />
        </div>
        <div className='flex justify-center items-center'>
            {/* <button onClick={() => navigate('/')}>Back</button> */}
            <button
                className='flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                aria-label={`Confirm edited task to now read ${updatedTaskName}`}
                type='submit'
            >
                <MdEdit size={size} />
                Edit Task
            </button>
        </div>
    </form>
    </div>
  )
}

export default EditForm