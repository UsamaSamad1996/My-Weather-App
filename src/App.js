// import useFetch from "./FetchAPI";
import Search from "./Search";

///

function App() {
  ///

  /// Declarations

  // const [data] = useFetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=London&appid=69ea760c23c02daa75bc46cf672537d0`
  // );

  // console.log(data);

  // const lockKey = Object.entries(data);
  // console.log(lockKey);

  /// Return

  return (
    <div className="App">
      <h1>My Weather App</h1>
      <Search></Search>
    </div>
  );
}

export default App;
