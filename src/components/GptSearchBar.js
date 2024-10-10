import React from "react";
import { BACKGROUND_IMG } from "../utils/constants";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const langKey = useSelector(store =>  store.config.lang)
  return (
    <>
      <div className="absolute -z-10 fill-transparent">
        <img src={BACKGROUND_IMG} alt="backgorund-image" />
      </div>
      <div className="pt-[8%]">
        <form className="bg-black py-6 px-4 w-1/2 grid grid-cols-12 mx-auto rounded-md">
          <input
            type="text"
            className="py-4 px-2 col-span-9 rounded-s-md"
            placeholder= {lang[langKey].gptSearchPlaceholder}
          />
          <button className="bg-red-700 text-white py-4 px-6 col-span-3 rounded-e-md">
           {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
