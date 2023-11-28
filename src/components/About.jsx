import React, { useState } from 'react'
import { FaRegQuestionCircle } from "react-icons/fa"

const About = () => {
    const size = 25;
    const [active, setActive] = useState(false);

    const handleAbout = () => {
        setActive(!active);
    };

    return (
        <>
            {/* old */}
            {/* <div className='flex flex-col group is-active'>
                <div className='flex items-center gap-2'>About <FaRegQuestionCircle size={size} /></div>
                <div className='overflow-hidden w-[300px] m-2 p-2 border rounded'>
                    <p>
                        This React JS Web Application was created using Vite with the purpose of managing Tasks entered into a TaskList.
                    </p>
                    <p>
                        Functionality includes CRUD operations (Create, Read, Update, Delete), saving and loading to local storage, sorting by date, progress notification and timestamp of completion.
                    </p>
                    <p>
                        The UI was designed using Tailwind CSS.
                    </p>
                </div>
            </div> */}

            {/* new */}
            <div className='wrapper w-4/5'>
                <div className="tab relative">
                    {/* <input type="radio" name='faq' id='faq1' className='appearance-none' /> */}
                    <label htmlFor="faq1">
                        <button className='flex items-center gap-2 transition duration-500 ease-in-out' onClick={handleAbout}>About <FaRegQuestionCircle size={size} /></button>
                        {/* <h2>01</h2> */}
                        {/* <h3>What is Tailwind CSS?</h3> */}
                    </label>

                    {active ? (<div className="answer mt-2 transition duration-700 ease-in-out">
                    <p className='text-base text-gray-900 p-3 bg-gray-50 rounded'>
                        This single page React JS Web Application was created using Vite with the purpose of managing Tasks entered into a TaskList.
                    
                        Functionality includes CRUD operations (Create, Read, Update, Delete), saving and loading to local storage, sorting by date, progress notification and timestamp of completion.
                    
                        The UI was designed using Tailwind CSS.
                    </p>
                    </div>) : (<></>)}
                    
                </div>
            </div>
        </>
    )
}

export default About