
import { Project } from './project';

export const Projects = ({ projects }) => {
  return (
    <div className="flex-1">
      {projects.map((project) => (
        <div key={project.project_id} className="border-2 rounded p-4">
          {project.name}
          {project.description}
          {project.team_leader_id}
          {/* <div>
            <Button onClick={() => deleteProject(project)}>Delete</Button>
          </div> */}
        </div>
      ))}
    </div>
  );
};