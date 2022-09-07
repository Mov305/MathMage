import React from 'react';
import CalBtn from './CalBtn';
import calculate from '../../logic/calculate';

const btn = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      obj: {},
    };
  }

  handleClick = (ele) => {
    this.setState((pre) => ({ ...pre, obj: calculate(this.state.obj, ele) }));
  };

  render() {
    const {
      obj: { total, next },
    } = this.state;
    return (
      <div className="flex flex-col items-center">
        <div className="w-80 md:w-[50%] grid grid-cols-4 md:text-xl">
          <div className="bg-[#858694] text-right col-span-4 w-full text-white mt-10 p-2 md:p-5">{next ? next : total ? total : '0'}</div>
          {btn.map((ele) => (
            <CalBtn key={ele} val={ele} handleClick={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
