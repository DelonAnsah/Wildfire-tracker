import React, { useContext } from 'react'
import WildFireContext from '../context/WildFireContext'
import Loader from '../components/Loader';

const Tracker = () => {
  const { wildFires, loading } = useContext(WildFireContext);

  return (
    <>
      {!loading ? <div className='container mx-auto p-4'>

        <h1 className="text-4xl font-bold text-center mb-4">Wildfire Tracker</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            wildFires.map((fire) => {
              // Check if geometries exist and retrieve the date from the first geometry
              const date = fire.geometries && fire.geometries.length > 0 ? new Date(fire.geometries[0].date) : null;

              // Convert the date to a local string format
              const formattedDate = date ? date.toLocaleString() : 'No date available';

              return (
                <div key={fire.id} className="p-4 border border-gray-300 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold">{fire.title}</h2>
                  <p className="text-sm text-gray-300 mt-2">{fire.description || "No description available"}</p>
                  <p className="text-gray-500">Date: {formattedDate}</p>
                  <div className="flex items-center mt-4">
                    <span className="font-semibold text-gray-700">Status:</span>
                    <span className="ml-2 text-red-500 font-bold">Active</span>
                  </div>
                </div>
              )
            })}
        </div>
      </div> : <Loader />}
    </>
  )
}

export default Tracker
