
import { useNavigate } from 'react-router-dom';
import { Project } from './project';
import { Button } from '../common/button';

export const Projects = ({ projects }) => {
const navigate = useNavigate();

  return (
    <div className="flex-1">
      {projects.map((project) => (
        <div key={project.id} className="border-2 rounded p-4">
          {project.name}
          {project.description}
          {/* {project.team_leader_id} */}
          <div>
            <Button onClick={() => navigate(`/project/${project.id}`)}></Button>
          </div>
        </div>
      ))}
    </div>
  );
};