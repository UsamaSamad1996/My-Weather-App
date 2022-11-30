//import { useEffect } from "react";
import { useState } from "react";
import useFetch from "./FetchAPI";

const Search = () => {
  ///

  ///Declarations
  // let c = 586;
  const [inputSearch, setInputSearch] = useState(undefined);

  const [data, error] = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=69ea760c23c02daa75bc46cf672537d0&units=metric`
  );

  ///

  /// Functions
  // console.log(error);
  // /// No. 1

  const handlesubmit = (e) => e.preventDefault();

  /// No. 2

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };

  /// Return

  return (
    <>
      <form className="search" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Search City"
          onChange={handleSearch}
          value={inputSearch}
        />
      </form>

      <div>
        {error && error.response.status === 400 ? (
          <div>Please Search</div>
        ) : inputSearch !== data?.name.toLowerCase() ? (
          <h1>Search Not Match</h1>
        ) : (
          data && (
            <div className="search-results" key={data.id}>
              <h2>{data.name}</h2>
              <h1>_{Math.round(data.main.temp)}°</h1>
              <ul>
                <li>Feels Like : {Math.round(data.main.feels_like)}°</li>
                <li>Country : {data.sys.country}</li>
                <li>{data.weather.map((item) => item.main)}</li>
                <li>
                  Description : {data.weather.map((item) => item.description)}
                </li>
                <li>Wind Speed : {data.wind.speed} km/hr</li>
                <li>Cloudy : {data.clouds.all}%</li>
              </ul>
            </div>
          )
        )}
        {/* {} */}
      </div>
    </>
  );
};

export default Search;
