/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react';

const NumberInput = ({ value, onChange, placeholder }: any) => {
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value
    if (/^\d*$/.test(inputValue) && inputValue.length <= 12) {
      onChange(inputValue)
    }
  }

  return (
    <input
      // disabled={showValid && !showError}
      value={value}
      onChange={handleInputChange}
      className='mt-1 px-3 py-1 bg-white border border-[#d1d5db] shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-black focus:ring-black block w-full rounded-sm sm:text-sm focus:ring-1'
      type='text'
      name='otp2FA'
      id=''
      placeholder={placeholder}
    />
  )
}

export default NumberInput
