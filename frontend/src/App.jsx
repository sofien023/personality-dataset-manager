import { useState } from 'react';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import Main from './components/dashboard/main';
import Profile from './components/dashboard/profile';
import Settings from './components/dashboard/settings';


function App() {
  const [page, setPage] = useState('main');

  const renderPage = () => {
    switch (page) {
      case 'signup':
        return <Signup setPage={setPage} />;
      case 'forgot-password':
        return <ForgotPassword setPage={setPage} />;
      case  'main' :
        return <Main setPage={setPage} />;
      case 'profile':
        return <Profile setPage={setPage} />;
      case 'settings':
        return <Settings setPage={setPage} />;
      default:
        return <Login setPage={setPage} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {renderPage()}
    </div>
  );
}

export default App;