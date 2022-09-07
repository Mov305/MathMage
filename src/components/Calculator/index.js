import React, { useState } from 'react';
import CalBtn from './CalBtn';
import calculate from '../../logic/calculate';

const btn = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Calculator = () => {
  const [obj, setObj] = useState({});

  const handleClick = (ele) => {
    setObj(calculate(obj, ele));
  };

  const { total, next } = obj;
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 md:w-[50%] grid grid-cols-4 md:text-xl">
        <div className="bg-[#858694] text-right col-span-4 w-full text-white mt-10 p-2 md:p-5">{next ? next : total ? total : '0'}</div>
        {btn.map((ele) => (
          <CalBtn key={ele} val={ele} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
