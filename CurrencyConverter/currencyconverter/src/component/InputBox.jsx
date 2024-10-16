import React from 'react';

const InputBox = ({ amount, setAmount, currency, setCurrency, label }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-full">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="0"
        />
      </div>
      <div className="ml-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Currency Type</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="usd">usd</option>
          <option value="inr">inr</option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;
