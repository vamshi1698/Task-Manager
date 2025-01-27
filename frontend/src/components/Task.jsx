import '../App.css'
import { useRef } from 'react'
const Task = ({task,setTasks,tasks,setNewTitle,setNewDetails})=>{
    const taskRef = useRef()
    
    const deleteTask = async()=>{
        await fetch(`http://localhost:3000/api/deleteTask?id=${task._id}`,{
            method: 'DELETE',
            credentials: 'include',
            headers:{
              "content-type":"application/json"
            }
          }).then(()=>{
            setTasks(()=>{
                console.log(tasks.filter(t=>t._id===task._id))
                const updatedTasks = tasks.filter(t=>t._id!==task._id)
                return updatedTasks
            })
          }).catch((e)=>{
            console.log(e)
          })
    }

    const editTask = ()=>{
        if((taskRef.current.classList).contains('popup')){
            taskRef.current.classList.remove('popup')
            return;
        }
        taskRef.current.classList.add('popup')
    }
    return(
        <div ref={taskRef} className='task'>
            <div className='task-container'>
                <h3 className='task-title'>{task.title}</h3>
                <p className='task-details'>{task.details}</p>
            </div>
            <div className='buttons'>
                <i onClick={editTask} className="fa-regular fa-pen-to-square edit edit-mode"></i>
                <i className="fa-solid fa-trash-can" onClick={deleteTask}></i>
            </div>
        </div>
    )
}

export default Task