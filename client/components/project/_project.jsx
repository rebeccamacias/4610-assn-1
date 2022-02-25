import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { useParams } from 'react-router-dom';
import { Tasks } from './tasks';
import { Input } from '../common/input'

export const Project = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [project, setProject] = useState(null);
  const {projectId} = useParams();
  const [errorMessage, setErrorMessage] = useState('');

  // Code for creating a new task
  const [timeEst, setTimeEst] = useState(0);
  const [taskDesc, setTaskDesc] = useState("");
  const [taskName, setTaskName] = useState("");

  //code for adding a user to a project
  const [potentialEmail, setPotentialEmail] = useState("");


  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    const allUsers = await api.get('users');
    setAllUsers(allUsers);
    const result = await api.get(`/project/${projectId}`);
    const { users, tasks, ...project } = result.project;
    setUsers(users);
    setTasks(tasks);
    setProject(project);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const validateUser = async () => {
    setErrorMessage('');
    let found = false;
    let userBeingAdded;
    allUsers.users.map((user) => {
      if (user.email = potentialEmail){
        found = true;
        userBeingAdded = user;
      }
    });
    
    if (found) {
      setUsers(...users, userBeingAdded);
      const projectBody = {
        projectId: project.id,
        users: users
      }
      await api.put(`project/${project.id}`, projectBody);
      console.log('user added');
    } else {
      setErrorMessage('User does not have an account.');
    }
    console.log(users);
  }

  const saveTask = async () => {
    setErrorMessage('');
  
    if (taskName === '') {
      setErrorMessage('Task name can\'t be empty');
      return;
    }
    if (taskDesc === ''){
      setErrorMessage('Task description can\'t be empty');
      return;
    }
    if (timeEst === ''){
      setErrorMessage('Time estimate can\'t be empty');
      return;
    }
    
    const taskBody = {
      title: taskName,
      description: taskDesc,
      timeEstimation: timeEst, 
      status: false,
      projectId: project.id
    }
    const { task } = await api.post(`tasks/${project.id}`, taskBody); // Fix path
  
    setTasks([...tasks, task]);
  };

  return (
      <div>
        <div>New Task Name</div>
        <Input type="text" value={taskName} onChange={(e)=> {setTaskName(e.target.value);}}></Input>
        <div>New Project Description</div>
        <Input type ="text" value={taskDesc} onChange={(e) => {setTaskDesc(e.target.value);}}></Input>
        <div>New Task Time estimate in Hours with step of .25</div>
        <Input type ="number" step={".25"} value={timeEst} onChange={(e) => {setTimeEst(e.target.value);}}></Input>
        <Button type="button" onClick={saveTask}>Create new project</Button>
        <br/> <br/>
        <br/>
          <Tasks tasks={tasks}></Tasks>
          <br/>
          <br/>
          Email field to invite, need to check that entered email corresponds to a user
          <Input value={potentialEmail} onChange={(e) => {setPotentialEmail(e.target.value);}}></Input>
          <Button onClick={validateUser}>Add user  </Button>
      </div>
  )
}