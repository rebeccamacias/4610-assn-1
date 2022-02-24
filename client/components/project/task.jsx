import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';

export const Task = ({ task, ...other }) => {
  const api = useContext(ApiContext);
  const toggleCompletion = async () => {

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
        {task.time_estimation}<br/>
        Completed: {task.status}<br/>
        { button }
      </div>
    );
  };