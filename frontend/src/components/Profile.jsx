import { useState } from 'react'
import Task from './Task'
import '../App.css'
const Profile = ()=>{
    const [tasks,setTasks] = useState([
        {
            _id: "67863147d551f3e69ce2c930",
            title: "test",
            details: "This is a test task 1",
            user_id: "678630d3d551f3e69ce2c92c",
            __v: 0
        },
        {
            _id: "67863157d551f3e69ce2c932",
            title: "test1",
            details: "This is a test task 2",
            user_id: "678630d3d551f3e69ce2c92c",
            __v: 0
        },
        {
            _id: "67863163d551f3e69ce2c934",
            title: "test2",
            details: "This is a test task 3",
            user_id: "678630d3d551f3e69ce2c92c",
            __v: 0
        },
        {
            _id: "67863163d551f3e69ce2c934",
            title: "test3",
            details: "This is a test task 4",
            user_id: "678630d3d551f3e69ce2c9c",
            __v: 0
        }
    ])
    return(
        <div>
          <header className='header'>
            <div className="logo">
              <img src="https://yt3.ggpht.com/qo6-RFGqK3U1e4XApf4SPVovRY0zr0Dm6gfjZgkveoj_yhA45iWwnh8r2i4a-kGrte1n8crDE-E=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="" />
            </div>
            <h3 className='head-title'>Task Manager</h3>
            <button className='logout'>Logout</button>
          </header>
          <form className="new-task">
            <input placeholder='title here' type="text" name="title" id="title" />
            <textarea placeholder='details here...' name="details" id="details"></textarea>
            <button className='task-submit' type="submit">Add Task</button>
          </form>
            <div className='tasks'>
            {
                tasks.map((t)=>{
                    return  <Task key={t._id} task={t} />
                })
            }
            </div>
        </div>
      )
}
export default Profile