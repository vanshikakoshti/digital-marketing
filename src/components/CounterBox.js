import React from 'react'
import CountUp from 'react-countup';


const CounterBox = ({ end, suffix, label }) => {
  return (
    <div className="counter-box text-center mx-lg-2">
      <h3 className="fw-bold">
        <CountUp end={end} duration={2} suffix={suffix} />
      </h3>
      <p>{label}</p>
    </div>
  );
};

export default CounterBox;