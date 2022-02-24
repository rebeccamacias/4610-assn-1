import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Input } from '../common/input';
import { Projects } from './projects';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [projectName, setNewProjectName] = useState('');
  const [projectDescription, setNewProjectDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    const { projects } = await api.get('/projects');
    setProjects(projects);
    setLoading(false);
  }, []);



  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };

  // Get projects using api
  // useEffect(async () => {
  //   const { projects } = await api.get(`/projects/:${user.id}`);
  //   setLoading(false);
  //   setProjects(projects);
  // }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

const saveProject = async () => {
  setErrorMessage('');

  if (projectName === '') {
    setErrorMessage('Project name can\'t be empty');
    return;
  }
  if (projectDescription === ''){
    setErrorMessage('Project description can\'t be empty');
    return;
  }
  
  const projectBody = {
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

    {/*TODO get all projects the user is associated with */}
    <div>New Project Name</div>
    <Input type="text" value={projectName} onChange={(e)=> {setNewProjectName(e.target.value);}}></Input>
    <div>New Project Description</div>
    <Input type ="text" value={projectDescription} onChange={(e) => {setNewProjectDescription(e.target.value);}}></Input>
    <div></div>
    <Button type="button" onClick={saveProject}>Create new project</Button>
    <br/> <br/>

    <Projects projects={projects} />
    <br/>
    <br/>

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
