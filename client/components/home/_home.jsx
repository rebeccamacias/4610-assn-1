import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [newProjectName, setNewProjectName] = useState("");

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

  if (loading) {
    return <div>Loading...</div>;
  }
  var projects = []; // Get projects using api

  var projectsDiv = projects.map((project)=> 
  <div key={project.project_id}>
      Name {/*Get Project name */}
      Go to Project
      <Button type="button" onClick={(api.get('/project:id'))} /*Navigate to project view */>
        Go to project name {}
      </Button>
  </div>)
  
  return (
    <div className="p-4">
      <h1>Welcome {user.firstName}</h1>
    <div>
      <h1>Projects</h1>
      
      {/*TODO Create project component, then get all projects the user is associated with */}
      {projectsDiv}
      
    </div>
    <textarea
        className="p-2 border-2 rounded flex"
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
      />
    <Button type="button" onClick={createNewProject()}>Create new project</Button> 
    

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
