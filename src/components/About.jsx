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
            <div className='wrapper w-full'>
                <div className="tab relative">
                    {/* <input type="radio" name='faq' id='faq1' className='appearance-none' /> */}
                    <label htmlFor="faq1">
                        <button className='flex items-center gap-2 transition duration-500 ease-in-out' onClick={handleAbout}>About <FaRegQuestionCircle size={size} /></button>
                    </label>

                    {active ? (<div className="answer mt-2 transition duration-700 ease-in-out">
                    <p className='sm:text-base text-gray-900 p-3 bg-gray-50 rounded'>
                        This single page React JS Web Application was created using Vite with the purpose of Managing Tasks entered into a TaskList.
                    
                        Functionality includes CRUD operations (Create, Read, Update, Delete), saving and loading to local storage, theme switching, sorting by date, progress notification and timestamp of completion.
                    
                        The UI was designed using Tailwind CSS and React Icons.
                    </p>
                    </div>) : (<></>)}
                    
                </div>
            </div>
        </>
    )
}

export default About