import { useEffect, useState } from 'react';

export function useClientFetch<FetchData>(url: string, options: RequestInit) {
  const [data, setData] = useState<FetchData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json: FetchData = await response.json();
        console.log('response', json);
        setData(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  async function refreshData(refreshOptions: RequestInit) {
    const response = await fetch(url, refreshOptions);
    const json = await response.json();
    setData(json);
  }

  //return necessary data

  return { data, loading, error, refreshData };
}
