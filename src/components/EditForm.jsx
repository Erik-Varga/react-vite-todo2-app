import React, { useEffect, useState } from 'react';

// library imports
import { MdEdit, MdDelete } from "react-icons/md";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
    const size = 35;
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
            className='w-full border p-2 mb-2 rounded-sm'
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
                className='flex justify-center items-center gap-2 m-2 bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-700 hover:shadow-md'
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