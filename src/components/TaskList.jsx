import React, { useState } from 'react'

// library imports
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// custom components
import TaskItem from './TaskItem'

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
    const size = 25;
    const [sortAscending, setSortAscending] = useState(false);

    function sortAZ() {
        setSortAscending(true)
    }
    function sortZA() {
        setSortAscending(false)
    }

    const totalNumber = []

    return (
        <>
            <div className='w-full flex justify-between items-center mt-2 p-1'>
                <span className='text-sm'>
                    Number of Tasks: {tasks.length} <br />
                    Completed:&nbsp;
                    {tasks.map((task) => {
                        if (task.checked) {
                            totalNumber.push(task)
                        }
                    })}
                    {Math.round((totalNumber.length / tasks.length) * 100).toFixed(0)}%
                </span>
            
                <span className='text-sm flex justify-center items-center'>
                    Sort Date:&nbsp;
                    <IoIosArrowDown
                        size={size}
                        onClick={sortZA}
                        className={!sortAscending ? 'text-yellow-600 hover:cursor-pointer hover:text-yellow-600' : 'hover:cursor-pointer hover:text-yellow-600'}
                        title='sort descending'
                    />
                    <IoIosArrowUp
                        size={size}
                        onClick={sortAZ}
                        className={sortAscending ? 'text-yellow-600 hover:cursor-pointer hover:text-yellow-600' : 'hover:cursor-pointer hover:text-yellow-600'}
                        title='sort ascending'
                    />
                </span>
            
            </div>

            {tasks && !sortAscending ? (
                <ul className='mt-2 border-2 p-2 rounded border-gray-400 shadow-md'>
                    {tasks.sort((a, b) => b.id - a.id).map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleTask={toggleTask}
                            enterEditMode={enterEditMode}
                        />
                    ))}
                </ul>
                )
                :
                (
                    <ul className='mt-2 border-2 p-2 rounded border-gray-400 shadow-md'>
                        {tasks.sort((b, a) => b.id - a.id).map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                deleteTask={deleteTask}
                                toggleTask={toggleTask}
                                enterEditMode={enterEditMode}
                            />
                        ))}
                    </ul>
                )
            }
        </>
    )
}

export default TaskList