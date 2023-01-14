import { useEffect, useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Tasks from '../src/components/Tasks'


const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {
  const [tasks, setTasks] = useState([])

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

 useEffect(()=>{
  loadSavedTasks()
 },[])
  

  function setTaskAndSave(newTasks){
    setTaskAndSave(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks))
  }

  function addTask(taskTitle) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  

  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id != taskId )
    setTaskAndSave(newTasks)
  }

  function toggleTaskcompleatedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTaskAndSave(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskcompleatedById}
        onDelete={deleteTaskById}
      />
    </>
  )

}

export default App
