import '../App.css'
import { useEffect, useRef, useState } from 'react'
const Task = ({task,setTasks,tasks})=>{
    const taskRef = useRef()
    const [editmode,setEditmode] = useState()
    const [editTitle,setEditTitle] = useState(task.title)
    const [editDetails,setEditDetails] = useState(task.details)
    const deleteTask = async()=>{
        await fetch(`http://localhost:3000/api/deleteTask?id=${task._id}`,{
            method: 'DELETE',
            credentials: 'include',
            headers:{
              "content-type":"application/json"
            }
          }).then(()=>{~
            setTasks(()=>{
                console.log(tasks.filter(t=>t._id===task._id))
                const updatedTasks = tasks.filter(t=>t._id!==task._id)
                return updatedTasks
            })
          }).catch((e)=>{
            console.log(e)
          })
    }

    const updateTask= async()=>{
        await fetch(`http://localhost:3000/api/edit`,{
            method:"PUT",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({id: task._id ,details: editDetails,title: editTitle})
        }).then(async(response)=>{
            console.log(response)
            const data= await response.json()
            const addupdatedtask = (tasks.filter((t)=>t._id!=data._id))
            setTasks([data,...addupdatedtask])
        }).catch((e)=>{
            console.log(e)
        })
        setEditmode(false)
    }

    useEffect(()=>{
        if(!editmode){
                setEditDetails(task.details)
                setEditTitle(task.title)
        }
    },[editmode])
    return(
        <div ref={taskRef} className='task'>
            <div className='task-container'>
                <h3 className='task-title'>{task.title}</h3>
                <p className='task-details'>{task.details}</p>
            </div>
            {
                editmode ? 
                <div className='popup'>
                    <div className='edit-inputs'>
                        <i className="fa-solid fa-x"  onClick={()=>setEditmode(false)}></i>
                        <input type="text" name="title" onChange={(e)=>setEditTitle(e.target.value)} value={editTitle} id="title" />
                        <textarea name="details" rows={5} id="" value={editDetails} onChange={(e)=>setEditDetails(e.target.value)}></textarea>
                        <button onClick={updateTask}>Update</button>
                    </div>
                </div> : ""
            }
            <div className='buttons' >
                <i onClick={()=>setEditmode(true)} className="fa-regular fa-pen-to-square edit edit-mode"></i>
                <i className="fa-solid fa-trash-can" onClick={deleteTask}></i>
            </div>
        </div>
    )
}

export default Task