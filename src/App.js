import React from "react";
import axios from "axios";
import { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./Wave.css";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const url = `http://127.0.0.1:8000/`;

  const getResult = (e) => {
    e.preventDefault();

    const requestBody = {
      question: query,
    };

    axios
      .post(url, requestBody)
      .then((res) => {
        setSearchResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setQuery({});
  };


  const handleClick = async (e) => {
    e.preventDefault();
    getResult(e);
  };

  
  return (
    <>
      <div className="relative h-screen">
        <div className="fixed top-0 left-0 h-full w-full before:overflow-hidden">
          <div className="wave-container lg:top-1/2">
            <div className="wave"></div>
          </div>

          {/* Header */}
          <div className="absolute top-[40%] md:top-[35%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[95%] lg:w-[80%]">
            <div className="w-full mt-5 p-2 text-center">
              <h1 className="text-center text-xl md:text-3xl font-bold text-white sm:text-4xl">
                Phenx Car Explorer
              </h1>
            </div>


            {/* Searchbar */}
            <div className="flex flex-row w-full justify-center my-6">
              <div className="flex flex-row w-[90%] md:w-2/3 items-center justify-center space-x-4 mt-5">
                <form className="w-full" onSubmit={getResult}>
                  <input
                    type="text"
                    className="text-sm md:text-xl text-black font-medium rounded-2xl p-3 w-full shadow-xl focus:outline-none z-10"
                    placeholder="Looking for something specific? Search here..."
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
                <UilSearch
                  size={35}
                  className=" text-white cursor-pointer transition ease-out hover:scale-125 z-10"
                  onClick={handleClick}
                />
              </div>
            </div>


            {/* Answer area  */}
            {searchResults && (
              <div className=" bg-white w-[90%] mx-auto md:w-full bg-opacity-30 backdrop-filter backdrop-blur-md p-4 mt-10 rounded-2xl z-10">
                <p className="text-white text-sm md:text-xl font-normal">
                  {searchResults}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

