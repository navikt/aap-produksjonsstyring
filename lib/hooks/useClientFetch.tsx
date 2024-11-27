import { useEffect, useState } from 'react';

export function useClientFetch<FetchData>(url: string, options?: RequestInit) {
  const [data, setData] = useState<FetchData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json: FetchData = await response.json();
        if (response.ok) {
          setData(json);
        } else {
          setError(`Error status: ${response.status}`);
        }
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
