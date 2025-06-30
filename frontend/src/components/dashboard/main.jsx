import Sidebar from './Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Navbar from './Navbar';
import { useState } from 'react';
import RecordForm from './pages/RecordForm';

export default function Main() {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState('main');

  const renderPage = () => {
    switch (page) {
      case 'main':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'form':
        return <RecordForm setPage={setPage} />;
      default:
        return <Dashboard />;
    }
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="fixed w-full">
        <Navbar setState={toggleSidebar} />
        <div className="flex h-screen w-full">
          <div
            className={`
              fixed top-0 left-0 h-full z-30
              transition-transform duration-500 ease-in-out
              bg-[#e0e0e0] w-[15%]
              ${open ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <Sidebar page={page} setPage={setPage} />
          </div>

          <div className={`flex-1 
                          overflow-scroll 
                          ${!open ? 'w-full' : 'w-[85%]'} 
                          ${open ? 'ml-[15%]' : ''}`}>
            {renderPage()}
          </div>
        </div>
      </div>
    </>
  );
}
