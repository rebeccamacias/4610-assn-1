import { Task } from './task';

export const Tasks = ({ tasks }) => {
  return (
    <div className="flex-1">
      {tasks.map((task) => (
        <div key={task.task_id} className="border-2 rounded p-4">
          {task.title}
          {task.description}
          {task.time_estimation}
          {task.status}
          {/* {task.team_member_id} */}
          {/* <div>
            <Button onClick={() => deleteTask(task)}>Delete</Button>
          </div> */}
        </div>
      ))}
    </div>
  );
};