import React, { useContext, useState, useEffect } from 'react';
import WildFireContext from '../context/WildFireContext';
import { FaBell, FaFilter } from 'react-icons/fa6';

const Alerts = () => {
  const { wildFires, loading } = useContext(WildFireContext);
  const [filter, setFilter] = useState('all');
  const [filteredFires, setFilteredFires] = useState(wildFires);

  // Handle filter change
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

  // Effect to filter fires when filter changes or when wildFires is updated
  useEffect(() => {
    if (filter === 'all') {
      setFilteredFires(wildFires);
    } else {
      setFilteredFires(wildFires.filter(fire => fire.severity === filter));
    }
  }, [filter, wildFires]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className='text-3xl font-bold text-red-600 flex items-center gap-2'>
        <FaBell /> Wildfire Alerts & Notifications
      </h1>

      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600">Stay updated with real-time alerts.</p>
        <div className="flex items-center gap-2">
          <FaFilter className="text-gray-500" />
          <select
            value={filter}
            onChange={handleFilterChange}
            className="text-gray-600 border px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">All Alerts</option>
            <option value="High">High Severity</option>
            <option value="Medium">Medium Severity</option>
            <option value="Low">Low Severity</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {filteredFires.map(alert => (
          <div key={alert.id} className="p-6 rounded-lg shadow-md border-l-4 border-red-500 bg-red-50 hover:shadow-xl transition ease-in-out duration-300">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-xl text-gray-800">{alert.title}</h2>

              <span className={`px-3 py-1 text-xs font-medium rounded-full ${alert.severity === 'High' ? 'bg-red-600 text-white' : alert.severity === 'Medium' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                {alert.severity}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-3">{alert.description || "No description available"}</p>
            <a href={alert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition duration-300">
              More Details
            </a>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center py-6 text-gray-600">
          <p>Loading alerts...</p>
        </div>
      )}
    </div>
  );
};

export default Alerts;
