import React from 'react';

class CalBtn extends React.Component {
  render() {
    const { val } = this.props;
    const grid = val === '0' ? 'col-span-2 ' : '';
    const bg = ['/', 'x', '-', '+', '='].includes(val) ? ' bg-[#F5913E] hover:bg-[#c17513] ' : ' bg-[#E2E2E2] hover:bg-[#858694] ';

    return <div className={grid + bg + ' cursor-pointer p-2 md:p-5 border-[#D1D1D1] hover:text-slate-200 transition-all ease-in-out duration-150 border'}>{val}</div>;
  }
}

export default CalBtn;
