import React from 'react';

const stats = [
  {
    label: 'Total Contact',
    value: '162 Contact',
    change: '↓ 1.1%',
    changeColor: 'text-red-500',
  },
  {
    label: 'Active Company',
    value: '43 Company',
    change: '↓ 1.7%',
    changeColor: 'text-red-500',
  },
  {
    label: 'Ongoing Task',
    value: '5 Task',
    change: '↑ 1.7%',
    changeColor: 'text-green-500',
  },
  {
    label: 'Email Sent',
    value: '1,251 Mail',
    change: '↑ 8.7%',
    changeColor: 'text-green-500',
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start border border-gray-100">
          <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
          <div className="text-2xl font-bold text-[#2D3142]">
            {stat.value}
            <span className={`text-xs ml-2 ${stat.changeColor}`}>{stat.change}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
