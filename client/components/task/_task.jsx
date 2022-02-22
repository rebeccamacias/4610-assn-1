import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Input } from "../common/input";

export const Task = () => {
    const [, setAuthToken] = useContext(AuthContext);
    const api = useContext(ApiContext);
    const roles = useContext(RolesContext);
    const navigate = useNavigate();
  
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [project, setProject] = useState(null);
    
    // Get task from router
    const [task, setTask] = useState(null)
    
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


    return (
        <div>
            <Input defaultValue={task.title}>Task name</Input>
            <Input defaultValue={task.description}>Description</Input>
            <Input defaultValue={task.time_estimation}>Time estimate</Input>
            <Input defaultValue={task.status}>Completion Status</Input>

            <Button onClick={saveTaskChanges}>Save Changes</Button>
            
        </div>
    )
}