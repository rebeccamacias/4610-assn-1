import {Task} from './task'

export const Tasks = ({ tasks }) => {
    return (
      <div className="flex-1">
        {tasks.map((task) => (
          <Task key={task.task_id} task={task}  />
        ))}
      </div>
    );
  };