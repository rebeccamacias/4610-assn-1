import { Task } from './task';

export const Tasks = ({ tasks }) => {
  return tasks.map((task) => {
      if (task.status == true) {
        <Task task={task} className="border-2 rounded p-4 outline-green-600"></Task>
      } else {
        <Task task={task} className="border-2 rounded p-4 outline-red-600"></Task>
      }
  })
};