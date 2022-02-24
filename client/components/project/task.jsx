import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';
import { useContext, useEffect, useState } from 'react';

export const Task = ({ task, users, ...other }) => {
  const api = useContext(ApiContext);
  const [user, setUser] = useState(null);

  useEffect(async () => {

  });

  const toggleCompletion = async () => {

  }

  const assignTaskToUser = async () => {

  }

  var button;
  if (task.status == true){
    button = <Button className="border-2 rounded p-4 bg-red-600" onClick={toggleCompletion}>Mark as undone</Button>
  } else {
    button = <Button className="border-2 rounded p-4 bg-green-600" onClick={toggleCompletion}>Mark as done</Button>
  } 
  return (
      <div className="border-2 rounded p-4" {...other}>
        {task.title}<br/>
        {task.description}<br/>
        Assigned to {user.firstName}
        {task.time_estimation}<br/>
        Completed: {task.status}<br/>
        { button }
      </div>
    );
  };