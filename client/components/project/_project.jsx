import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { useParams } from 'react-router-dom';
import { Tasks } from 'tasks';
import { Input } from '../common/input'

export const Project = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [project, setProject] = useState(null);
  const {projectId} = useParams();

  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    const result = await api.get(`/project/${projectId}`);
    const { users, tasks, ...project } = result.project;
    setUsers(users);
    setTasks(tasks);
    setProject(project);
    setLoading(false);
  }, []);

  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };
  // Get current Project

  // Get projects members, create a list item for each so drop down menus can be used to assign tasks
  // members api call

  // Get tasks for the current project

  // Figure out how to go over the array of tasks, and based off status send to column

  // 

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(project);
  
  return (
      <div>
        <Button>Add task</Button>
        <br/>
          <Tasks tasks={tasks}></Tasks>
          <br/>
          <br/>
          <Input>Email field to invite, need to check that entered email corresponds to a user</Input>
          <Button>Add user  </Button>
      </div>
  )
}