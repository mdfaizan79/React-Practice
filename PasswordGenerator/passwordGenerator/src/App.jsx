import { useState, useCallback } from 'react';
import './index.css'; 

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "~!@#$%^&*(){}";
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white text-center p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Password Generator</h1>
        <input 
          type="text" 
          value={password} 
          className="border border-gray-300 p-2 mb-4 w-full" 
          placeholder="Generated Password" 
          readOnly
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
        <input 
          type="range" 
          min="4" 
          max="20" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          className="mt-4 w-full"
        />
        <input 
          type="checkbox" 
          checked={numAllow} 
          onChange={(e) => setNumAllow(e.target.checked)} 
        />
        <label htmlFor="Number">Number</label>
        <input 
          type="checkbox" 
          checked={charAllow} 
          onChange={(e) => setCharAllow(e.target.checked)} 
        />
        <label htmlFor="Char">Character</label>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
