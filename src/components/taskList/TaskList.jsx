import axios from 'axios';

import {RiDeleteBack2Fill  } from 'react-icons/ri'

const TaskList = ({task,getTask}) => {
  const deleteTask =async(id)=>{
const url ="https://63f7293fe40e087c9588886d.mockapi.io/api/tasks";
try {
  await axios.delete(`${url}/${id}`)
} catch (error) {
  console.log(error)
  
}
getTask()
  }
  return (
    <div>
      {task.map((item)=>{
       const {id,task,date} = item 
       return(
      <div>
        <div>
          <h4>{task}</h4>
        <p>{date}</p> 
        </div>
        <div>
        <RiDeleteBack2Fill
        style={{cursor:"pointer",
      marginRight:"20px",
    fontSize:"2rem",
  boxShadow:"2px 2px 2px green"}}
        onClick={()=>deleteTask(id)}
        />
        </div>
       
       </div>
       
       )
      })}
    </div>
  )
}

export default TaskList
