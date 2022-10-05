import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppPage from './pages/AppPage';
import AuthPage from './pages/AuthPage';
import fetchTasks from './store/asyncActions/fetchTasks';
import Auth from './services/AuthService';
import Request from './services/RequestService';

function App() {
  const dispatch = useDispatch();
  // Request.post('/login/', { username: 'mazde', password: 'mazdemazde' });
  Auth.login();
  dispatch(fetchTasks.get());
  // for (let i = 0; i < 100; i++) {
  //   Request.del(`/tasks/${i}`);
  // }

  return (
    <div className="app">
      <Routes>
        <Route path="app" element={<AppPage />} />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
