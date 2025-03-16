import { useState } from 'react';

export default function useLocalStorage({ key, initialValue }) {
  const [storageData, setStorageData] = useState(() => {
    const dataAsString = localStorage.getItem(key);
    const localStorageData = dataAsString
      ? JSON.parse(dataAsString)
      : initialValue;

    return localStorageData;
  });

  const saveToLocalStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const updateStorageData = (data) => {
    setStorageData(data);
    saveToLocalStorage(data);
  };

  return { storageData, updateStorageData };
}
