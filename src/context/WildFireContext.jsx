import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const WildFireContext = createContext();


export const WildFireProvider= ({ children }) => {

  const [wildFires, setWildFires] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWildFireEvents = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events?days=300');
        const wildfireEvents = res.data.events.filter((event) => event.categories.some((cat) => cat.id === 8 ));
        setWildFires(wildfireEvents);
      } catch (error) {
        console.error('Error fetching wildfire events:', error);
      }
      setLoading(false);
    }
    fetchWildFireEvents();
  },[])
  
  return (
    <WildFireContext.Provider value={{ wildFires, loading }}>
      {children}
    </WildFireContext.Provider>
  )
}

export default WildFireContext
