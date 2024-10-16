import React, { useState } from 'react';
import InputBox from './component/InputBox';

const App = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const handleSwap = () => {
    const tempAmount = fromAmount;
    const tempCurrency = fromCurrency;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
  };

  const handleConversion = () => {
    // Placeholder for conversion logic
    // Here you can implement an API call to get the conversion rate
    const conversionRate = 83.5; // For example, USD to INR rate
    if (fromCurrency === 'usd' && toCurrency === 'inr') {
      setToAmount((fromAmount * conversionRate).toFixed(2));
    }
    // Add additional conversion logic here for other currencies
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <InputBox
          amount={fromAmount}
          setAmount={setFromAmount}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          label="From"
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-blue-600"
          onClick={handleSwap}
        >
          swap
        </button>
        <InputBox
          amount={toAmount}
          setAmount={setToAmount}
          currency={toCurrency}
          setCurrency={setToCurrency}
          label="To"
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
          onClick={handleConversion}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default App;
