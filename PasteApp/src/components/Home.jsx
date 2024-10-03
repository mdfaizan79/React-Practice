import { useState } from "react";
import { PlusCircle } from "react-feather"; // If you are using react-icons/feather

const Home = ({ pasteId, setPasteId, createPaste, resetPaste }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${pasteId ? "w-[80%]" : "w-[85%]"} text-black border border-input rounded-md p-2 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-blue-500`}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={createPaste}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>

          {pasteId && (
            <button
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4
              focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={resetPaste}
            >
              <PlusCircle size={20} />
            </button>
          )}
        </div>

        <div className="w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl transition-shadow hover:shadow-xl">
          {/* Add more content or paste form here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
