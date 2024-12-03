import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const switchToggle = () => {
    setToggle((prev) => !prev);
  };

  return {
    toggle,
    switchToggle,
  };
}
