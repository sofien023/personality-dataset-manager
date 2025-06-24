import { FaHome, FaCog, FaUser } from 'react-icons/fa';

const menuItems = [
  { icon: <FaHome size={24} />, label: 'Dashboard' ,url: 'main' },
  { icon: <FaCog size={24} />, label: 'Settings', url: 'settings' },
  { icon: <FaUser size={24} />, label: 'Profile', url: 'profile'},
];

export default function Sidebar({setPage}) {

  return (
    <div className={`flex flex-col`}>
      <ul className="flex-col">
        {menuItems.map((item, index) => (

          <li onClick={() => setPage(item.url)}
            key={index}
            className="flex items-center w-full cursor-pointer py-[0.5rem]"
          >
            <div className="ml-[-20px] pr-[5px]">{item.icon}</div>
            <button onClick={() => setPage(item.url)}><span className="text-base">{item.label}</span></button>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}