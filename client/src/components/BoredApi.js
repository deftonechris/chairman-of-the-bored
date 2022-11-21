import React, { useEffect, useState } from "react";
// import Results from "./Results";

var BASE_URL = "https://www.boredapi.com/api/activity/";

const SearchApi = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const ApiCall = async () => {
      setLoader(true);
      let response = await fetch(`${BASE_URL}`);
      console.log(response, "response");
    };
    ApiCall();
  }, []);
};

const BoredApi = (props) => {
  return (
    <div className="z-10 flex justify-center items-center content-center">
      <div
        className="flex flex-col bg-sky-400 justify-center items-center h-96 max-w-lg w-full animate-pulse rounded-lg"
        id="activity-prompt"
      >
        <form className="flex flex-col p-8 ">
          <div>
            <h1 className="flex p-2 text-4xl text-center">
              What are you going to do today?{" "}
            </h1>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="quantity">How many participants:</label>
            <input
              type="number"
              className="p-2"
              id="quantity"
              name="quantity"
              min="1"
              max="99"
            ></input>
            <label htmlFor="vol">Price (from free to $$$): </label>
            <input type="range" id="vol" name="vol" min="0" max="10"></input>
          </div>
          <div className="flex flex-col p-6">
            <button
              onClick={SearchApi}
              className="bg-yellow-300 h-10 animate-bounce shadow-2xl rounded-lg p-6 flex place-self-center items-center w-32 hover:text-sky-400"
            >
              Tell Me!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoredApi;
