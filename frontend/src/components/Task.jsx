import '../App.css'
const Task = ({task})=>{
    return(
        <div className='task'>
            <h3 className='task-title'>{task.title}</h3>
            <p className='task-details'>{task.details}</p>
        </div>
    )
}

export default Task