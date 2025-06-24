import { FaHome, FaCog, FaUser } from 'react-icons/fa';
import { useState } from 'react';

const menuItems = [
  { icon: <FaHome size={24} />, label: 'Dashboard' ,url: 'main' },
  { icon: <FaCog size={24} />, label: 'Settings', url: 'settings' },
  { icon: <FaUser size={24} />, label: 'Profile', url: 'profile'},
];

export default function Sidebar({setPage}) {
  const [activeItem, setActiveItem] = useState('main');
  return (
    <div className={`flex flex-col`}>
      <ul className="flex-col" style={{
        margin: 0,
        padding: 0,
      }}>
        {menuItems.map((item, index) => (
          <div className={`${activeItem === item.url ? 'bg-[#d0d0d0] text-black' : 'text-gray-600 hover:bg-[#f0f0f0]'} rounded-lg transition-colors duration-300`} key={index}>
          <li onClick={() => {
            setPage(item.url)
            setActiveItem(item.url);
            }}
            key={index}
            className={`mx-0 flex items-center w-full cursor-pointer py-[0.5rem] px-[1rem]`}
          >
            <div className="pr-[5px]">{item.icon}</div>
            <button 
            className='bg-transparent border-none'
            onClick={() => {
              setPage(item.url)
              setActiveItem(item.url);
              }}><span className="text-base">{item.label}</span></button>
            
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}