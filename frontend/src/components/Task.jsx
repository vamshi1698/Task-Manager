import '../App.css'
import { useRef } from 'react'
const Task = ({task,setNewTitle,setNewDetails})=>{
    const taskRef = useRef()

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
                <i className="fa-solid fa-square-check check"></i>
            </div>
        </div>
    )
}

export default Task