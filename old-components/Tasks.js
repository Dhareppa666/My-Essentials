import React from 'react'
import Task from './Task'
import '../index.css'

// const Task = [
//     {
//         id :1,
//         text: 'Doctor Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id :2,
//         text: 'Physician Appointment',
//         day: 'Mar 8th at 2:30pm',
//         reminder: false,
//     },
//     {
//         id :3,
//         text: 'Tech speech Appointment',
//         day: 'Feb 15th at 12:30pm',
//         reminder: true,
//     }
// ]

const Tasks = ({task, onDelete, onToggle}) => {

  return (

    // Whatever created above is immutable. So
    // if you want to add anything in the above obj
    // then use ===> setTasks{[...tasks, {new lets}]}
    <>
        {task.map((task) => 
        (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
    </>
  )
}

export default Tasks