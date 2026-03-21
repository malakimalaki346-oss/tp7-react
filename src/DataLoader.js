import { useState, useEffect } from 'react';

function DataLoader({ render, url, simulateData }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (simulateData) {
      setLoading(false);
      setData(simulateData);
      return;
    }
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url, simulateData]);
  
  return render({ data, loading, error });
}

export default DataLoader;