import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import { useState } from 'react';

export default function Main() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className='fixed'>
        <Navbar setState={toggleSidebar} />
        <div className="flex h-screen w-full">
          <div 
            className={`h-full top-0 right-0
${open
                ? 'translate-x-0 transition-transform duration-1000 ease-in-out transform bg-[#e0e0e0] w-[15%]'
                : '-translate-x-full transition-transform duration-1000 ease-in-out transform'
            } `}
          >
            {open && <Sidebar />}
          </div>

          <div className="flex-1 overflow-scroll w-full ">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
