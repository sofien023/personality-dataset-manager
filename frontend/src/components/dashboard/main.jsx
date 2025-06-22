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
    
    <div className="flex h-screen w-[100%]">
      {open ? (<div className='w-[25%] bg-[#e0e0e0]'>
        <Sidebar />
      </div>
    ) : ""}
      
      <div className="flex-1 overflow-scroll w-[75%]">
        <Dashboard />
      </div>
    </div>
    </div>
  </>);
}