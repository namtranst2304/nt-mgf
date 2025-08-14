import React from 'react';
import { FiHome, FiBell, FiCheckSquare, FiBriefcase, FiBarChart2, FiGrid, FiUsers, FiSettings, FiHelpCircle } from 'react-icons/fi';

const menu = [
  { label: 'Dashboard', icon: <FiHome size={20} color="#6C63FF" />, active: true },
  { label: 'Notifications', icon: <FiBell size={20} color="#5F6D7E" /> },
  { label: 'Tasks', icon: <FiCheckSquare size={20} color="#5F6D7E" /> },
  { label: 'Deals', icon: <FiBriefcase size={20} color="#5F6D7E" /> },
];
const records = [
  { label: 'Analytics', icon: <FiBarChart2 size={20} color="#5F6D7E" /> },
  { label: 'Companies', icon: <FiGrid size={20} color="#5F6D7E" /> },
  { label: 'Contacts', icon: <FiUsers size={20} color="#5F6D7E" /> },
];
const bottom = [
  { label: 'Settings', icon: <FiSettings size={20} color="#5F6D7E" /> },
  { label: 'Help & Getting Started', icon: <FiHelpCircle size={20} color="#5F6D7E" /> },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#F7F8FA] border-r border-gray-200 flex flex-col min-h-screen p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <FiUsers size={24} color="#6C63FF" />
        </div>
        <div>
          <div className="font-semibold text-[#2D3142]">Nam Tran</div>
          <div className="text-xs text-gray-500">Personal Account</div>
        </div>
      </div>
      <div className="mb-6">
        <input className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-[#2D3142]" placeholder="Search" />
      </div>
      <div className="mb-2 text-xs text-gray-500 font-semibold">Main Menu</div>
      <nav className="mb-4">
        <ul className="space-y-1">
          {menu.map((item) => (
            <li key={item.label}>
              <a className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-[#2D3142] ${item.active ? 'bg-white shadow-[0_2px_8px_0_rgba(108,99,255,0.08)] border-l-4 border-[#6C63FF]' : ''}`}
                href="#">
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-2 text-xs text-gray-500 font-semibold">Records</div>
      <nav className="mb-4">
        <ul className="space-y-1">
          {records.map((item) => (
            <li key={item.label}>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#2D3142]" href="#">
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1" />
      <nav className="mb-4">
        <ul className="space-y-1">
          {bottom.map((item) => (
            <li key={item.label}>
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#5F6D7E]" href="#">
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] rounded-xl p-4 text-white mt-2 shadow">
        <div className="font-semibold mb-1">Pro Mode</div>
        <div className="text-xs mb-2">Upgrade now to unlock all features you need.</div>
        <button className="w-full bg-white text-[#6C63FF] rounded-lg py-2 font-semibold">Upgrade Pro →</button>
      </div>
    </aside>
  );
}
