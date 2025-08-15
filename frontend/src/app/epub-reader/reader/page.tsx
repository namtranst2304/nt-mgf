"use client";
import React from "react";
// import { ReactReader } from "react-reader"; // Uncomment nếu đã cài thư viện

export default function ReaderPage() {
  // const epubUrl = "/path/to/book.epub"; // Lấy từ query hoặc props
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#0c224d] flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-0 shadow-2xl rounded-xl overflow-hidden" style={{ background: '#f6ecd9' }}>
          {/* Left page */}
          <div className="w-[480px] h-[600px] px-8 py-10 flex flex-col justify-between border-r border-[#e2d3b6] relative">
            <div className="text-[15px] leading-relaxed font-serif text-[#3a2c1a]">
              of the latter must necessarily depend on those of the former."<br/>
              "Suffer me to say a word," here broke in J. T. Maston. Permission having been granted, "Gentlemen," said he with an inspired accent, "our president is right in placing the question of the projectile above all others. <span className='bg-blue-200'>The ball we are about to discharge at the moon is our ambassador to her, and I wish to consider it from a moral point of view.</span> The cannon-ball, gentlemen, to my mind, is the most magnificent manifestation of human power. If Providence has created the stars and the planets, man has called the cannon-ball into existence. Let <span className='bg-pink-200'>Providence</span> claim the swiftness of electricity and of light, of the stars, the comets, and the planets, of wind and sound—we claim to have invented the swiftness of the cannon-ball, a hundred times superior to that of the swiftest horses or railway train. How glorious will be the moment when, infinitely exceeding all hitherto attained velocities, we shall launch our new projectile..."
            </div>
            <div className="text-xs text-gray-500 text-center mt-6">location 108 of 449 (24%)</div>
          </div>
          {/* Right page */}
          <div className="w-[480px] h-[600px] px-8 py-10 flex flex-col justify-between relative">
            <div className="text-[15px] leading-relaxed font-serif text-[#3a2c1a]">
              with the rapidity of seven miles a second! Shall it not, gentlemen— shall it not be received up there with the honors due to a terrestrial ambassador?"<br/>
              <span className='bg-yellow-200'>Overcome with emotion the orator sat down and applied himself to a huge plate of sandwiches before him.</span><br/>
              "And now," said Barbicane, "let us quit the domain of poetry and come direct to the question."<br/>
              <span className='bg-green-200'>"By all means," replied the members, each with his mouth full of sandwich.</span><br/>
              The problem before us," continued the president, "is how to communicate to a projectile a velocity of 12,000 yards an second. Let us next examine the velocity..."
            </div>
            {/* Floating toolbar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-[#222] bg-opacity-90 rounded-lg px-4 py-2 shadow-lg items-center">
              <button className="text-white text-xs px-2 py-1 hover:bg-[#444] rounded flex items-center gap-1"><span>🔦</span>Highlight</button>
              <button className="text-white text-xs px-2 py-1 hover:bg-[#444] rounded flex items-center gap-1"><span>🔍</span>Search</button>
              <button className="text-white text-xs px-2 py-1 hover:bg-[#444] rounded flex items-center gap-1"><span>📖</span>Definition</button>
              <button className="text-white text-xs px-2 py-1 hover:bg-[#444] rounded flex items-center gap-1"><span>🔗</span>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
