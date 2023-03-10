
import axios from "axios";
import { RiDeleteBack2Fill } from "react-icons/ri";
const TaskList = ({ task, getTask }) => {
  const deleteTask=async(id)=>{
    const url ="https://63f7293fe40e087c9588886d.mockapi.io/api/tasks"
    await axios.delete(`${url}/${id}`)
getTask()
  }
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            key={id}
            className="d-flex justify-content-between bg-warning rounded-2 p-2 mt-2 "
          >
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <RiDeleteBack2Fill
            onClick={()=>deleteTask(id)}
              style={{
                cursor: "pointer",
                marginRight: "20px",
                fontSize: "2rem",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
