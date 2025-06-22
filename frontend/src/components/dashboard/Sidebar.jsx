import { FaHome, FaCog, FaUser } from 'react-icons/fa';

const menuItems = [
  { icon: <FaHome size={24} />, label: 'Dashboard' },
  { icon: <FaCog size={24} />, label: 'Settings' },
  { icon: <FaUser size={24} />, label: 'Profile' },
];

export default function Sidebar() {

  return (
    <div className={`flex flex-col`}>
      <ul className="flex-col">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-full cursor-pointer py-[0.5rem]"
          >
            <div className="ml-[-20px] pr-[5px]">{item.icon}</div>
            <span className="text-base">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}