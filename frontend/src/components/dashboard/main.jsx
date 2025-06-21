import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

export default function Main() {
  return (
    <div className="flex h-screen overflow-hidden w-[100%]">
        <div className='w-[25%] ml-0
'>
            <Sidebar />
        </div>
      
      <div className="flex-1 w-[75%]">
        <Dashboard />
      </div>
    </div>
  );
}