
import {useState} from 'react'

import React, { Component } from 'react';
import Tasks from './components/Tasks';
import Header from './components/header';

const App = () => 
{
  
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
  console.log('Deleted',id)
  setTasks(tasks.filter((task) =>  task.id !== id
  ))
}

return (
  
  <div className="App">
  <Header />
  {tasks.length > 0 ?
    <Tasks tasks={tasks} onDelete={deleteTask}/>
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
