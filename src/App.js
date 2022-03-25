import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './redux';

function App() {
const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  const [taskId, setTaskId] = useState(3);

  const handleClick = () =>{
    setTaskId((prev)=>prev+1)
  }
  useEffect(()=>{
    dispatch(addTask({id:taskId, text:'Task '+taskId, done:false}));
    console.table( tasks);
   dispatch(toggleTask(taskId))
   console.table(tasks);
   dispatch(deleteTask(taskId));
   console.table(tasks);


  }, [taskId])
  return (
    <div className="App">
        <button onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default App;
