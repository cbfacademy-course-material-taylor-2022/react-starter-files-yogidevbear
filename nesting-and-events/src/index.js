import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';

const taskList = [
  {"id":"task1","title":"Buy Milk","isComplete":true},
  {"id":"task2","title":"Read a book","isComplete":false},
  {"id":"task3","title":"Early morning run","isComplete":false},
  {"id":"task4","title":"Drink water","isComplete":false},
  {"id":"task5","title":"Visit the puppy shelter","isComplete":true},
  {"id":"task6","title":"Watch Bad Sisters","isComplete":false}
];

function App() {

  const [tasks,setTasks] = useState(taskList);

  function toggleComplete(id){
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        return task;
      }
      return task;
    }))
  }

  return (
    <Fragment>
      <h1 key="heading">Task List</h1>
      <TaskContainer>
        {tasks.map((task) =>
          <Task key={task.id}
                id={task.id}
                isComplete={task.isComplete}
                title={task.title}
                toggleComplete={toggleComplete} />)}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

