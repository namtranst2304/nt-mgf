import React from 'react';

export default function SourceWidget() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100 h-76">
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-[#2D3142]">Source</div>
        <button className="px-3 py-1 rounded bg-[#F7F8FA] text-[#2D3142]">Weekly</button>
      </div>
      <div className="text-3xl font-bold text-[#2D3142] mb-2">12,569 <span className="text-green-500 text-base ml-2">↑ 2.1%</span></div>
      <div className="flex gap-2 mb-2">
        <span className="text-xs text-blue-500">Website</span>
        <span className="text-xs text-purple-500">Email</span>
        <span className="text-xs text-pink-500">Social Media</span>
      </div>
      <div className="text-xs text-gray-500 mb-2">Details | Metric | Total</div>
      <div className="text-xs text-gray-500 mb-2">Acquisition: $12.01 <span className="text-red-500">↓ 1.1%</span></div>
      <div className="text-xs text-gray-500 mb-2">Conversion: 1.2 days <span className="text-red-500">↓ 2.0%</span></div>
      <div className="text-xs text-gray-500 mb-2">ROI: 98% <span className="text-green-500">↑ 1.7%</span></div>
      <button className="mt-2 px-4 py-2 rounded bg-[#F7F8FA] border border-gray-200 text-[#2D3142]">View reports</button>
    </section>
  );
}
