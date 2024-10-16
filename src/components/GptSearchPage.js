import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_URL}
          alt="backgorund-image"
          className="brightness-50 h-screen object-cover md:h-[100%] md:object-none "
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
