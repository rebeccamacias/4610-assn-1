import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';
import { useContext, useEffect, useState} from 'react';

export const Task = ({ task, users, ...other }) => {
  const api = useContext(ApiContext);
  const [user, setUser] = useState(null);

  useEffect(async () => {
    setUser(task.user);

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
  const options = users.map((user) => 
    <option value={user.id} key={user.id}>{user.email}</option>
  );
  return (
      <div className="border-2 rounded p-4" {...other}>
        {task.title}<br/>
        {task.description}<br/>
        Assigned to <select onChange={(e) => setUser(e.target.value)}>
          {options}
          <option value="">None</option>
        </select>
        <Button onClick={assignTaskToUser}> Assign Task</Button> <br/>
        {task.timeEstimation} Hours (Estimate)<br/>
        Completed: {task.status}<br/>
        { button }
      </div>
    );
  };