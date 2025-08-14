import React from 'react';

const contacts = [
  { name: 'Jane Cooper', email: 'lesliealex01@mail.com', phone: '(406) 555-0120', location: '2972 Westheimer Rd...', status: 'New', gender: 'Female' },
  { name: 'Wade Warren', email: 'floydmiles@mail.com', phone: '(480) 555-0103', location: '1901 Thornridge Cir...', status: 'Bad Timing', gender: 'Male' },
  { name: 'Esther Howard', email: 'jromebell@mail.com', phone: '(603) 555-0120', location: '4140 Parker Rd. Allent...', status: 'Customers', gender: 'Male' },
];

export default function ContactsTable() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-[1140px]">
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-[#2D3142]">Contacts</div>
        <div className="flex gap-2">
          <input className="px-3 py-2 rounded-lg border border-gray-200 bg-[#F7F8FA] text-[#2D3142]" placeholder="Search contact..." />
          <button className="bg-[#F7F8FA] px-4 py-2 rounded-lg border border-gray-200 text-[#2D3142]">Filter</button>
        </div>
      </div>
      <table className="w-full text-sm text-[#2D3142]">
        <thead>
          <tr className="text-gray-500 text-left">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Lead Status</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.email} className="border-t border-gray-100">
              <td className="py-2">{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.location}</td>
              <td>
                <span className={`px-2 py-1 rounded text-xs ${c.status === 'New' ? 'bg-green-100 text-green-700' : c.status === 'Bad Timing' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{c.status}</span>
              </td>
              <td>{c.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
