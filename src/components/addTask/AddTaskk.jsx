
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios"

function AddTask() {
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit =(e)=>{
   e.preventDefault()
   const newTask ={task,date}
   addNewTask(newTask)
  }

  const addNewTask=async(newTask)=>{
    const url ="https://63f7293fe40e087c9588886d.mockapi.io/api/tasks";
await axios.post(url,newTask)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e)=>setTask(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="" value={date} onChange={(e)=>setDate(e.target.value)} />
      </Form.Group>
      <div className="text-center ">
        <Button variant="primary w-50" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTask;

