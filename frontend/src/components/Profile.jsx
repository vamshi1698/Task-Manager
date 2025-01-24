import { useEffect,useState } from 'react'
import Task from './Task'
import '../App.css'
const Profile = ()=>{
    const [newTitle,setNewTitle] = useState("")
    const [newDetails,setNewDetails] = useState("")
    const [tasks,setTasks] = useState([])

    useEffect(()=>{
      const fetchTasks =async()=>{
        try{
          const response = await fetch("http://localhost:3000/api/alltasks",{
            method: 'GET',
            credentials: 'include'
          })
            const data = await response.json()
            setTasks(data)
            console.log(data)
        }
        catch(e){
          console.log(e)
        }
      }
      fetchTasks()
      },[])



    let i=0
    const addTask = async(e)=>{
      e.preventDefault()
      try{
        const response = await fetch("http://localhost:3000/api/createtask",{
          method: 'POST',
          credentials: 'include',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            "title":newTitle,
            "details":newDetails
          })
        })
          const data = await response.json()
          console.log(data)
        }
        catch(e){
          console.log(e)
        }
        setTasks(()=>{
          i++;
          return [...tasks,{title:newTitle,details:newDetails,_id:`id${i}`}]
        })
        setNewTitle("")
        setNewDetails("")
      }
    
    return(
        <div>
          <header className='header'>
            <div className="logo">
              <img src="https://yt3.ggpht.com/qo6-RFGqK3U1e4XApf4SPVovRY0zr0Dm6gfjZgkveoj_yhA45iWwnh8r2i4a-kGrte1n8crDE-E=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="" />
            </div>
            <h3 className='head-title'>Task Manager</h3>
            <button className='logout'>Logout</button>
          </header>
          <form className="new-task" >
            <input placeholder='title here' onChange={(e)=>setNewTitle(e.target.value)} type="text" value={newTitle} name="title" id="title" />
            <textarea placeholder='details here...' onChange={(e)=>setNewDetails(e.target.value)} name="details" value={newDetails} id="details"></textarea>
            <button className='task-submit' onClick={addTask} type="submit">Add Task</button>
          </form>
            <div className='tasks'>
            {
                tasks.map((task)=>{
                    return  <Task key={task._id} task={task} />
                })
            }
            </div>
        </div>
      )
}
export default Profile