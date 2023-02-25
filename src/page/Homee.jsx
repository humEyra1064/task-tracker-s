import { Button } from "react-bootstrap"
import AddTaskk from "../components/addTask/AddTaskk"
import TaskListt from "../components/taskList/TaskListt"


const Homee = () => {
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button 
      variant="danger "
      >show</Button>
      <AddTaskk/>
      <TaskListt/>
    </div>
  )
}

export default Homee
