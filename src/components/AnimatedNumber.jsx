import { useEffect, useState } from "react";

export const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 10);
    const step = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  return count.toLocaleString();
};
