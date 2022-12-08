import React, { useState } from 'react';

export default function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  };

  return (
    <>
      <input
        type={inputType}
        value={inputValue}
        name='input-form'
        onChange={handleChange}
        className='mt-2 w-full h-[55px] rounded-2xl pl-5 border-solid border-2 shadow'
      />
    </>
  );
}
