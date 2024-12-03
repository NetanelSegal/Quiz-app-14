import { useEffect, useRef, useState } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    intervalRef.current = setInterval(() => setTime((time) => time + 1), 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    const id = setInterval(() => setTime((time) => time + 1), 1000);
    intervalRef.current = id;
    return () => clearInterval(id);
  }, []);

  return {
    time,
    start,
    stop,
  };
};
