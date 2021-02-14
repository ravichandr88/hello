
import {useState} from 'react'

import React, { Component } from 'react';
import Tasks from './components/Tasks';
import Header from './components/header';
import AddTask from './components/AddTask';

const App = () => 
{

  const [showAddTask, setShowAddTask] = useState(false);
  
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th of December',
        reminder: false,

    },
    {
        id:2,
        text: 'Appointment in ZOOM',
        day: 'Feb 6th of December',
        reminder: false,

    },
    {
        id:3,
        text: 'Wild Safari',
        day: 'Feb 7th of December',
        reminder: false,

    }
]);


//Delte the task
const deleteTask = (id) =>{
  console.log('Deleted',id);
  setTasks(tasks.filter((task) =>  task.id !== id
  ))
}

//Reminder for the task
const toggleReminder = (id) => {
  console.log(id);
  setTasks(tasks.map((task) =>
  task.id===id  ? {...task, reminder : !task.reminder} : task
  )
  )
}


//Add Task
const addTask = (task) =>
{
  const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
  setTasks([...tasks , newTask])
// console.log(task);
}


return (
  
  <div className="App">
  <Header onAdd = {() => setShowAddTask( !showAddTask )}  showAdd={showAddTask}/>
  
  {showAddTask &&  <AddTask onAdd={addTask} />}
  {tasks.length > 0 ?
    <Tasks tasks={tasks} onDelete={deleteTask}  onToggle = {toggleReminder} />
    : 'No tasks to show'
  }
  </div>
)
}

export default App;


// class App extends Component {



//   render() { 
    
//   const [tasks, setTasks] = useState([
//     {
//         id:1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th of December',
//         reminder: false,

//     },
//     {
//         id:2,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th of December',
//         reminder: false,

//     },
//     {
//         id:3,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th of December',
//         reminder: false,

//     }
// ]);

//     return (
//       <div className="App">
//       <Header />
//         <Tasks tasks={tasks}/>
//       </div>
//     )
//   }
// }

// export default App;
