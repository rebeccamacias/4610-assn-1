import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './home/_home';
import { Project } from './project/_project';
import { AuthContext } from '../utils/auth_context';
import { SignIn } from './sign_in/_sign_in';
import { SignUp } from './sign_up/_sign_up';
import { Admin } from './admin/_admin';

export const Router = () => {
  const [authToken] = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={authToken ? <Home /> : <Navigate replace to="signin" />} // no token means not logged in
      />
      <Route path="admin" element={<Admin />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="project/:projectId" element={<Project />}/>
      <Route path="*" element={<div>404</div>} /*makes sure we go to 404 for any other path accessed */ />

    </Routes>
  );
};
