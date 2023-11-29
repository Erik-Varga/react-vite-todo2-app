import React from 'react'

// library imports
import { FaSun, FaMoon  } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

function ThemeDLS({ theme, handleThemeSwitch }) {
    const size = 20;

  return (
    <div className='flex items-center gap-2 dark:text-slate-700 duration-100 p-2'>
      <FaSun size={size} className='hover:cursor-pointer' onClick={handleThemeSwitch} />
      <FaMoon size={size} className='hover:cursor-pointer' />
      <RiComputerLine size={size} className='hover:cursor-pointer' />
    </div>
  )
}

export default ThemeDLS
