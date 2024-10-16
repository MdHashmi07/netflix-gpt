import React, { useRef } from "react";
import { API_OPTION} from "../utils/constants";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { OPENAI_KEY } from "../utils/constants";
import { addGptSuggestMovies } from "../utils/gptSlice";
// import openai from "../utils/openai";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const genAI = new GoogleGenerativeAI(OPENAI_KEY);

  const geminiConfig = {
    temperature: 0.7,  // Adjust for desired creativity vs. accuracy
    topP: 1.0,         // Controls sampling (1.0 for more likely choices)
  };

  const movieSearchTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTION);
    const json = await data.json();

    return json.results;
  }

  const handleGptSearchView = async (e) => {

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" ,  geminiConfig,});

    console.log(searchText.current.value )
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me name of 5 movies, comma seprated like the example result given ahead. Example Result: Sholay, Don, Tiger, Golmal, Heri Feri";

    const result = await model.generateContent(gptQuery);
    console.log(result.response.text());

    if(!result) {
      // TODO Error Handling
    }
    const moviesList = result?.response?.text().split(", ");
    console.log(moviesList)

    const promiseArray = moviesList.map(movie =>  movieSearchTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);

    dispatch(addGptSuggestMovies({movieName: moviesList, movieResults: tmdbResult}));
  };

  return (
    <>
      <div className="mx-2  md:mx-0 pt-[35%] md:pt-[8%]">
        <form
          className="bg-black py-4 md:py-6 px-4 w-full md:w-1/2 grid grid-cols-12 my-2 md:mb-6 mx-auto rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="py-2 md:py-4 px-2 col-span-9 rounded-s-md outline-none"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="bg-red-700 text-white py-2 md:py-4 px-3 md:px-6 col-span-3 rounded-e-md"
            onClick={handleGptSearchView}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
