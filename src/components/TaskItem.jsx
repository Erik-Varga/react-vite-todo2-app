import React, { useState } from 'react'

// library imports
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

// custom components

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
    const size = 25;
    const [isChecked, setIsChecked] = useState(task.checked);
    const date = new Date(task.id);
    const [dateCompleted, setDateCompleted] = useState(new Date());
    const duration = (dateCompleted - date);

    const handleCheckboxChange = (e) => {
        if (dateCompleted !== date || isChecked) {
            setDateCompleted(new Date())
        }
        setIsChecked(!isChecked);
        toggleTask(task.id);
    }

    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
          days = Math.floor((duration / (1000 * 60 * 60 * 24)));

        var secondsLabel, minutesLabel, hoursLabel, daysLabel;

        if (seconds === 1) {secondsLabel = "sec"} else {secondsLabel = "sec"};
        if (minutes === 1) {minutesLabel = "min"} else {minutesLabel = "min"};
        if (hours === 1) {hoursLabel = "hr"} else {hoursLabel = "hrs"};
        if (days === 1) {daysLabel = "day"} else {daysLabel = "days"};

      
        // days = (days < 10) ? "0" + days : days;
        // hours = (hours < 10) ? "0" + hours : hours;
        // minutes = (minutes < 10) ? "0" + minutes : minutes;
        // seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return (
            days + " " + daysLabel + " + " + 
            hours + " " + hoursLabel + " + " + 
            minutes + " " + minutesLabel + " + " + 
            seconds + " " + secondsLabel     
        );
      }

      var diff = (msToTime(duration))

    return (
        <li className='flex justify-between items-center pt-4 px-2 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700'>
            <span className=''>
                <label
                    className='flex gap-2'
                    htmlFor={task.id}
                >

                    <p>
                        {isChecked ? <>
                            <GrCheckboxSelected size={size} />
                            {/* {task.checked === 'False' ? <>false</> : <>true</>} */}
                        </> : <>
                            <GrCheckbox size={size} />
                        </>}
                    </p>
                    {isChecked ? <span className='line-through text-gray-500 font-semibold'>{task.name}</span> : <span className='font-semibold'>{task.name}</span>}
                </label>
                
                {/* input box not shown */}
                <input
                    type="checkbox"
                    checked={isChecked}
                    name={task.name}
                    id={task.id}
                    onChange={handleCheckboxChange}
                    style={{ display: "none" }}
                />

                <div className='w-full p-1 text-xs'>
                    <span className='sm:text-base'>
                    Created: {date.toLocaleDateString('en-US')} {date.toLocaleTimeString('en-US')}
                    </span>
                    <br />
                    {!isChecked 
                    ? 
                    (<span className='text-green-600 sm:text-base'>Not Done</span>) 
                    : 
                    (<span className='sm:text-base'>Done: {dateCompleted.toLocaleDateString('en-US')} {dateCompleted.toLocaleTimeString('en-US')}<br /><span className='text-xs'>{diff}</span></span>)}
                </div>
                &nbsp;
            </span>

            <span className='flex gap-2'>
                <button
                    className='btn hover:text-blue-800'
                    aria-label={`Update ${task.name} Task`}
                    title={`Update ${task.name} Task`}
                    onClick={() => enterEditMode(task)}
                >
                    <FaRegEdit size={size} />
                </button>

                <button
                    className='btn hover:text-red-800'
                    aria-label={`Delete ${task.name} Task`}
                    title={`Delete ${task.name} Task`}
                    onClick={() => deleteTask(task.id)}
                >
                    <FaRegTrashAlt size={size} />
                </button>
            </span>
        </li>
    )
}

export default TaskItem