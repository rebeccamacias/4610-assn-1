import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Projects } from './_projects';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [newProjectName, setNewProjectName, newProjectDescription, setNewProjectDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    setLoading(false);
  }, []);

  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };

  // Get projects using api



  if (loading) {
    return <div>Loading...</div>;
  }
  

  const projectsDiv = projects.map((project) => 
  <div key={project.project_id}>
      <Button type="button" onClick={(<Link to={`project/${project.project_id}`}></Link>)} /*Navigate to project view */>
        {project.name}
      </Button>
      {project.description}
  </div>
  )

const saveProject = async () => {
  setErrorMessage('');

  if (projectName === '') {
    setErrorMessage("Project name can't be empty");
    return;
  }
  const projectBody = {
    team_leader_id: api.get('team_leader/:' + user_id),
    name: projectName,
    description: projectDescription,
  };
  const { project } = await api.post('/projects', projectBody);

  setProjects([...projects, project]);
};
  
  return (
    <div className="p-4">
      <h1>Welcome {user.firstName}</h1>
    
    <br/>

    {/*TODO Create project component, then get all projects the user is associated with */}
    <div>New Project Name</div>
    <Input type="text" value={projectName} onChange={(e)=> {setNewProjectName(e.target.value);}}></Input>
    <div>New Project Description</div>
    <Input type ="text" value={projectDescription} onChange={(e) => {setNewProjectDescription(e.target.value);}}></Input>
    <div></div>
    <Button type="button" onClick={api.post('projects')}>Create new project</Button>
    <br/> 

    <div>
      <h1>Projects</h1>
      {projectsDiv}
    </div>

      <Button type="button" onClick={logout}>
        Logout
      </Button>
      {roles.includes('admin') && (
        <Button type="button" onClick={() => navigate('/admin')}>
          Admin
        </Button>
      )}
    </div>
  );
};
