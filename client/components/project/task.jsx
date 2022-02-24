import { Button } from '../common/button';

export const Task = ({ task, ...other }) => {
  var button;
  if (task.status == true){
    button = <Button className="border-2 rounded p-4 bg-red-600">Mark as undone</Button>
  } else {
    button = <Button className="border-2 rounded p-4 bg-green-600">Mark as done</Button>
  } 
  return (
      <div className="border-2 rounded p-4" {...other}>
        {task.title}
        {task.description}
        {task.time_estimation}
        Completed: {task.status}
        { button }
      </div>
    );
  };