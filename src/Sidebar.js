import React from 'react';

// Sidebar component showing your last written messages
// Use the index as a unique key for the list item
function Sidebar({ history }) {
  return (
    <div className="absolute top-0 left-0  bg-slate-600 p-4 border-l h-full overflow-y-auto sm:w w-72">
      <h2 className="text-xl text-black font-bold mb-4 text-center">History</h2>
      <ul className="list-none space-y-2">
        {history.map((item, index) => (
          <li
            key={index}
            className="bg-white text-black p-3 rounded shadow-sm border border-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;