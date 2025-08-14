"use client";
import React, { useState } from 'react';
import { FiHome, FiBell, FiCheckSquare, FiBriefcase, FiBarChart2, FiGrid, FiUsers, FiSettings, FiHelpCircle } from 'react-icons/fi';

const mainItems = [
  { label: 'Dashboard', icon: FiHome, section: 'Main Menu' },
  { label: 'Notifications', icon: FiBell, section: 'Main Menu' },
  { label: 'Tasks', icon: FiCheckSquare, section: 'Main Menu' },
  { label: 'Deals', icon: FiBriefcase, section: 'Main Menu' },
  { label: 'Analytics', icon: FiBarChart2, section: 'Records' },
  { label: 'Companies', icon: FiGrid, section: 'Records' },
  { label: 'Contacts', icon: FiUsers, section: 'Records' },
];
const bottom = [
  { label: 'Settings', icon: <FiSettings size={20} color="#5F6D7E" /> },
  { label: 'Help & Getting Started', icon: <FiHelpCircle size={20} color="#5F6D7E" /> },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(mainItems[0].label);
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
      
      {['Main Menu', 'Records'].map(section => (
        <section key={section} className="mb-4">
          <div className="mb-2 text-xs text-gray-500 font-semibold">{section}</div>
          <ul className="space-y-1">
            {mainItems.filter(item => item.section === section).map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;
              const btnStyle = isActive
                ? 'text-[#6C63FF] bg-white shadow-[0_2px_8px_0_rgba(108,99,255,0.08)] border-l-4 border-[#6C63FF]'
                : 'text-[#5F6D7E]';
              const iconColor = isActive ? '#6C63FF' : '#5F6D7E';
              return (
                <li key={item.label}>
                  <button
                    className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${btnStyle}`}
                    onClick={() => setActiveItem(item.label)}
                  >
                    <Icon size={20} color={iconColor} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

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
