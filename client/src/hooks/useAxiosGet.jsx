import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useAxiosGet({ url, initialValue }) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const axiosGet = async () => {
      setIsLoading(true);
      setError('');
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.error(error);
        if (error.status === 404) {
          setError('Not found try again');
        } else {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    axiosGet();
  }, []);

  return { data, isLoading, error };
}
