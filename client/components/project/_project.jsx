import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';

export const Project = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [project, setProject] = useState(null);
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
  // Get current Project

  // Get projects members, create a list item for each so drop down menus can be used to assign tasks
  // members api call
  var users;
  var projectsDiv = users.map((user)=> 
  <div>
      <li>{user.name}</li>
  </div>)

  // Get tasks for the current project

  // Figure out how to go over the array of tasks, and based off status send to column

  // 

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
      <div>
          {/* create columns */}
          <Button onClick={/* Add task */}>Add Task</Button>
          
          <div>
            <div style="float: left; width: 200px;">
                Incomplete tasks
                Display Incomplete tasks
            </div>
            <div style="float: left; width: 200px;">
                Completed Tasks
                Display completed tasks
            </div>
          </div>
          <Button onClick={/** Drop down of all users? */}>Add Team Member</Button>
      </div>
  )
}