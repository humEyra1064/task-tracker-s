import { Button } from "react-bootstrap"
import AddTaskk from "../components/addTask/AddTaskk"
import TaskListt from "../components/taskList/TaskListt"
import {useState ,useEffect} from "react"
import axios from "axios"


const Homee = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("Show Task Bar")
  const [task, setTask] = useState([])
  const url ="https://63f7293fe40e087c9588886d.mockapi.io/api/tasks";

  const toggle =()=>{
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  }
  const getTask =async()=>{
  const {data}=await axios (url)
  setTask(data)
  }

  useEffect(() => {
    
  getTask()
  
  }, [])
  
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button className="bg-success"
    variant="success"
     onClick={()=>{toggle()}}
      >{text}</Button>
      {isOpen && <AddTaskk task={task} getTask={getTask}/>}
      
      <TaskListt task={task} getTask={getTask}/>
    </div>
  )
}

export default Homee
