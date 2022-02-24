
// import { Button } from '../common/button';

export const Project = ({ project }) => {
  return (
    <div className="border-2 rounded p-4">
      {project.name}
      {project.description}
      {/* {project.team_leader_id} */}
      {/* <div>
        <Button onClick={() => deleteNote(note)}>Delete ME!!!</Button>
      </div> */}
    </div>
  );
};