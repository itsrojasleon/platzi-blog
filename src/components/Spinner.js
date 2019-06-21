import React from 'react';

function Spinner() {
  return (
    <div className='center'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
export default Spinner;
