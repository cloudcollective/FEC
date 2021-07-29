import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [on, setOn] = useState(initialValue);

  const toggle = () => setOn(!on);
  return { on, toggle };
};

export default useToggle;
