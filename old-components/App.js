import React from 'react';

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState, useEffect} from 'react'

function App() {
  const {showAddTask, setShowAddTask} = useState(true)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      console.log(data)
    }
  }, []
  )

//Delete Task
const deleteTask = (id) =>{
  //console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggel Reminder
const toggleReminder =(id) => {
  setTasks(tasks.map((task)=>
  task.id === id ? 
  {...task, reminder : !task.reminder }
    : task))
}
  
  //Add Task
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      <AddTask onAdd={addTask} />
        {tasks.length > 0 ? <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show' }
        {/* <Header title='hello'/> */}
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <div><h1>Hello from class</h1></div>
//   }
// }

export default App;
