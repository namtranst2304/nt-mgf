"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const sampleBooks = [
  { id: "1", title: "Your Heart is a Muscle the Size of a Fist", author: "Sunil Yapa", cover: "https://covers.openlibrary.org/b/id/10521260-L.jpg" },
  { id: "2", title: "Interior Chinatown", author: "Charles Yu", cover: "https://covers.openlibrary.org/b/id/10521261-L.jpg" },
  { id: "3", title: "Lobizona", author: "Romina Garber", cover: "https://covers.openlibrary.org/b/id/10521262-L.jpg" },
  { id: "4", title: "Piranesi", author: "Susanna Clarke", cover: "https://covers.openlibrary.org/b/id/10521263-L.jpg" },
  { id: "5", title: "Via Negativa", author: "Daniel Hornsby", cover: "https://covers.openlibrary.org/b/id/10521264-L.jpg" },
  { id: "6", title: "A Burning", author: "Megha Majumdar", cover: "https://covers.openlibrary.org/b/id/10521265-L.jpg" },
  { id: "7", title: "Memorial", author: "Bryan Washington", cover: "https://covers.openlibrary.org/b/id/10521266-L.jpg" },
  { id: "8", title: "The Vanishing Half", author: "Brit Bennett", cover: "https://covers.openlibrary.org/b/id/10521267-L.jpg" },
  { id: "9", title: "The Midnight Library", author: "Matt Haig", cover: "https://covers.openlibrary.org/b/id/10521268-L.jpg" },
  { id: "10", title: "The Invisible Life of Addie LaRue", author: "V.E. Schwab", cover: "https://covers.openlibrary.org/b/id/10521269-L.jpg" },
  
];

const sidebarItems = [
  { label: "All books", count: 154 },
  { label: "Last read", count: 9 },
  { label: "Classic books", count: 15 },
  { label: "Favorites", count: 20 },
  { label: "Formats", count: 7 },
  { label: "Deleted", count: 2 },
  { label: "Fantastic", count: 6 },
  { label: "For Inspiration", count: 12 },
  { label: "New Category", count: 3 },
];

export default function EpubLibraryPage() {
  const [books, setBooks] = useState(sampleBooks);
  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeSidebar, setActiveSidebar] = useState("All books");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newBook = {
        id: Date.now().toString(),
        title: file.name,
        author: "Unknown",
        cover: "https://covers.openlibrary.org/b/id/10521260-L.jpg",
      };
      setBooks([newBook, ...books]);
    }
  };

  const handleDelete = (id: string) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const router = useRouter();

  const handleRead = (id: string) => {
    router.push(`/epub-reader/reader?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Topbar */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="px-4 py-2 rounded-lg bg-[#E3E6F0] text-[#2D3142] font-medium flex items-center gap-2"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <span>{activeSidebar}</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow z-10">
                {sidebarItems.map(item => (
                  <li key={item.label}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between font-medium ${activeSidebar === item.label ? 'bg-[#E3E6F0] text-[#2D3142]' : 'text-[#5F6D7E]'}`}
                      onClick={() => { setActiveSidebar(item.label); setDropdownOpen(false); }}
                    >
                      <span>{item.label}</span>
                      {item.count !== undefined && (
                        <span className="bg-gray-100 text-xs px-2 py-0.5 rounded ml-2">{item.count}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow"
            onClick={() => fileInputRef.current?.click()}
          >
            + Add Books
          </button>
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded font-semibold shadow">+ Add Folder</button>
          <input
            type="file"
            accept=".epub"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleUpload}
            aria-label="Upload EPUB"
          />
        </div>
        <input
          type="text"
          placeholder="Search by Title, Author and Tags"
          className="px-3 py-2 rounded bg-[#F7F8FA] text-[#2D3142] border border-gray-300 w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search books"
        />
      </div>

      {/* Books grid */}
      <div className="p-8">
        <div className="grid grid-cols-6 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow flex flex-col items-center relative group border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-400"
              onClick={() => handleRead(book.id)}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-40 object-cover rounded-t mb-2"
              />
              <div className="font-semibold text-center text-sm mb-1 text-[#2D3142]">{book.title}</div>
              <div className="text-gray-500 text-xs text-center mb-2">{book.author}</div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition"
                onClick={e => { e.stopPropagation(); handleDelete(book.id); }}
                title="Delete"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
