import { useState } from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';

const menuItems = [
  { icon: <FaHome size={24} />, label: 'Dashboard' },
  { icon: <FaCog size={24} />, label: 'Settings' },
  { icon: <FaUser size={24} />, label: 'Profile' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`relative bg-red flex flex-col h-full  ${open ? 'w-64' : 'w-20'}`}>
     <button
  onClick={() => setOpen(!open)}
  className="w-fit py-3 text-left px-4  text-white text-[24px] font-bold">
  ≡
</button>
      <ul className="mt-6 flex flex-col w-full">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-full hover:bg-gray-700 cursor-pointer"
          >
            <div className="mr-3">{item.icon}</div>
            {open && <span className="text-base">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}