

import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function CreditCard() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div className='w-[50%]'>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className='flex flex-col mt-10 gap-10 w-[100%] h-[100%] items-center'>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className='w-[70%] h-[10%] pl-3 text-black text-2xl'
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className='w-[70%] h-[10%] pl-3 text-2xl'
        />
        <div className='flex gap-5 w-[70%] h-[10%] text-2xl'>
          <input
            type="number"
            name="expiry"
            placeholder="Expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='w-[45%] h-[100%] pl-3'
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className='w-[45%] h-[100%] pl-3'
          />
        </div>
        

      </form>
    </div>
  );
}

export default CreditCard;