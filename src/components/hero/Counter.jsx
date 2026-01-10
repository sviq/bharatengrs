import { useEffect, useRef, useState } from 'react';

const Counter = ({ end, duration = 800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and start counting
          setCount(0);

          let start = 0;
          const incrementTime = Math.floor(duration / end);

          timerRef.current = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timerRef.current);
          }, incrementTime);
        } else {
          // Stop counter when out of view
          clearInterval(timerRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      clearInterval(timerRef.current);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}+</span>;
};

export default Counter;
