import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import CountUp from 'react-countup';

const CounterCallout = () => {
  const counterSectionRef = useRef();
  const isVisible = useOnScreen(counterSectionRef);
  const [done, setDone] = useState();
  useEffect(() => {
    if (isVisible) {
      setDone(true);
    }
  }, [isVisible]);
  return (
    <div
      className="flex my-20 gap-6 max-w-4xl mx-auto items-center"
      ref={counterSectionRef}
    >
      {(isVisible || done) && (
        <CountUp
          className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-blue-800 to-purple-800 tabular-nums"
          start={3000000 * 0.98}
          duration={1}
          end={3000000}
          suffix="+"
          separator=","
          decimal=","
        />
      )}

      <p className="text-3xl mb-0">
        "developers & businesses ship faster on Netlify."
      </p>
    </div>
  );
};

export default CounterCallout;
