import React, { useState } from 'react';
import './App.css'

// library imports
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdRefresh } from "react-icons/md";

// custom hooks
import useLocalStorage from './hooks/useLocalStorage';

// custom components
import EditForm from './components/EditForm'
import AddForm from './components/AddForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import About from './components/About';

function App() {
  const size = 25;
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);

  const [previousFocusElement, setPreviousFocusElement] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?'))
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
      ?
      {...t, checked: !t.checked}
      : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
      ?
      {...t, name: task.name}
      : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusElement.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusElement(document.activeElement);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='w-full'>
      <header className='flex justify-center'>
        <h1 className='text-2xl font-bold mb-2'>My Task List</h1>
        &nbsp;
        <MdOutlineTaskAlt />
      </header>

      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }

      {!isEditing && (
        <AddForm addTask={addTask} />
      )}

      {tasks.length > 0 && !isEditing && (
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
          />
      )}

    <div className='flex items-start justify-between p-2 text-xs text-gray-600 hover:text-green-700'>
      <About />
      <button className='flex justify-center items-center' onClick={refreshPage}>
        <MdRefresh size={size} />
        Refresh
      </button>

    </div>

      <Footer />
    </div>
  )
}

export default App
