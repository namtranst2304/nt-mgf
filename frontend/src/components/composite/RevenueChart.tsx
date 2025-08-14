import React from 'react';

export default function RevenueChart() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-[#2D3142]">Revenue forecast</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-[#F7F8FA] text-[#2D3142]">Monthly</button>
          <button className="px-3 py-1 rounded bg-[#F7F8FA] text-[#2D3142]">Quarterly</button>
          <button className="px-3 py-1 rounded bg-[#F7F8FA] text-[#2D3142]">Yearly</button>
        </div>
      </div>
      {/* TODO: Add chart library here */}
      <div className="h-40 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      <div className="mt-4 text-2xl font-bold text-[#2D3142]">$23,569.00 <span className="text-green-500 text-base ml-2">↑ 5.2%</span></div>
    </section>
  );
}
