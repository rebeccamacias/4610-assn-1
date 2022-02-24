import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';
import { useContext, useEffect} from 'react';

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
  return (
      <div className="border-2 rounded p-4" {...other}>
        {task.title}<br/>
        {task.description}<br/>
        Assigned to <Select onChange={(e) => setUser(e.target.value)}>
          <Option value="">None</Option>
          {users.map((user) => {
            <Option value={user}>{user.firstName}</Option>
          })}
        </Select>
        <Button> Assign Task</Button>
        {task.time_estimation}<br/>
        Completed: {task.status}<br/>
        { button }
      </div>
    );
  };