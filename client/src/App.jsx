import { lazy } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/publicRoute';

const Login = lazy(() => import('./pages/LoginForm'));
const Registration = lazy(() => import('./pages/RegistrationForm'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route index element={<Login />} />
            <Route path='/register' element={<Registration />} />
          </Route>
          <Route path='/Private' element={<PrivateRoute />}>
              <Route index element={<Profile />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
