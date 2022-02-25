import { Task } from './task';

export const Tasks = ({ tasks, users }) => {
  return tasks.map((task) => {
      if (task.status == true) {
        return <Task task={task} users={users} key={task.id} className="border-2 rounded p-4 border-green-600"></Task>
      } else {
        return <Task task={task} users={users} key={task.id} className="border-2 rounded p-4 border-red-600"></Task>
      }
  })
};