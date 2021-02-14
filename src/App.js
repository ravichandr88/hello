
import {useState, useEffect} from 'react'

import React, { Component } from 'react';
import Tasks from './components/Tasks';
import Header from './components/header';
import AddTask from './components/AddTask';

const App = () => 
{

  const [showAddTask, setShowAddTask] = useState(false);
  
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
    
  }, []);

  //Fetch the tasks
  const fetchTasks = async () => {
    const res = await fetch('https://datafly.herokuapp.com/task',
    // const res = await fetch('http://localhost:8000/task',
    { crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    const data = await res.json();

    console.log(data.tasks);
    return data.tasks
  }


//Delte the task
const deleteTask =async (id) =>{
  // await fetch('http://localhost:8000/task',{
    await fetch('https://datafly.herokuapp.com/task',{
    method:'DELETE',
    crossDomain: true,
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      id:id
    })
  });

  setTasks(tasks.filter((task) => task.id != id ))
  
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
const addTask = async (task) =>
{
  // const res = await fetch('http://localhost:8000/task', {
    const res = await fetch('https://datafly.herokuapp.com/task',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

}


return (
  
  <div className="App">
  <Header onAdd = {() => setShowAddTask( !showAddTask )}  showAdd = {showAddTask}/>
  
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
