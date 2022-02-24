// import { Button } from '../common/button';

export const Task = ({ task }) => {
    return (
      <div className="border-2 rounded p-4">
        {task.title}
        {task.description}
        {task.time_estimation}
        {task.status}
        {/* {task.team_member_id} */}
        {/* <div>
          <Button onClick={() => deleteNote(note)}>Delete ME!!!</Button>
        </div> */}
      </div>
    );
  };