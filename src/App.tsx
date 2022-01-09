import React,{FC,useState,ChangeEvent} from 'react';
import './App.css';
import {ITask} from './interfaces'

const App:FC=()=>{
  const [task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0);
  const [todoList,setTodoList]=useState<ITask[]>([]);




  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if (event.target.name==="task"){
    setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value))
    }
    
  };

const addTask=():void=>{
  const newTask={taskName:task,deadline:deadline}
  setTodoList([...todoList,newTask]);
  //console.log(todoList)
  setTask("");
  setDeadline(0);
}



  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="header">
          <div className='inputContainer'>
            <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
            <input type="text" placeholder="Deadline(in Days)..." value={deadline} name="deadline" onChange={handleChange}/>
          </div>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">

      </div>
    </div>
  );
}

export default App;
