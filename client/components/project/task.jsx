import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';
import { useContext, useEffect, useState} from 'react';

export const Task = ({ task, users, ...other }) => {
  const api = useContext(ApiContext);
  const [user, setUser] = useState(null);
  const [localTask, setLocalTask] = useState(task);

  useEffect(async () => {
    setUser(task.user);
  });

  const toggleCompletion = async () => {
    const taskBody = {
      id: task.id,
      title: task.title,
      description: task.description,
      timeEstimation: task.timeEstimation, 
      status: !task.status,
      projectId: task.projectId,
      
    }
    const {updatedTask} = await api.put(`tasks/${task.id}`, taskBody);
    window.location.reload(false); // I'm aware this is bad, I just dont care, I need to focus on other things at this point
    //  To whoever reads this, have a great day.  To the midterm! Vinny Smith 2/24/22 at 10:30 pm
  }

  const assignTaskToUser = async () => {
    console.log(user);
  }

  var button;
  if (localTask.status == true){
    button = <Button className="border-2 rounded p-4 bg-red-600" onClick={toggleCompletion}>Mark as undone</Button>
  } else {
    button = <Button className="border-2 rounded p-4 bg-green-600" onClick={toggleCompletion}>Mark as done</Button>
  } 
  const options = users.map((user) => 
    <option value={user.email} key={user.id}>{user.email}</option>
  );
  console.log(task)
  return (
      <>
      <br/>
      <div className="border-2 rounded p-4" {...other}>
        {task.title}<br/>
        {task.description}<br/>
        Assigned to { }<br/> 
        <select onChange={(e) => setUser(e.target.value)}>
          {options}
          <option value="">None</option>
        </select>
        <Button onClick={assignTaskToUser}> Assign Task</Button> <br/>
        {task.timeEstimation} Hours (Estimate)<br/>
        Completed: {task.status}<br/>
        { button }
      </div>
      </>
    );
  };