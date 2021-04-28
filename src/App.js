import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Result from "./components/Result";

const App = () => {
  const [search, setSearch] = useState({ city: "", country: "" });
  const [consult, setConsult] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    setLoading(true);
    const fetchAPI = async () => {
      const apiKey = `69c2b15b5amsh7f46a2169d8816dp12e377jsn03abb3c2f8ff`;
      const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2C${country}&lat=0&lon=0&id=2172797&lang=null&units=metric&mode=xml%2C%20html`;
      if (consult) {
        await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.cod === "404") {
              setError(true);
            } else {
              setError(false);
            }
            setData(result);
            setLoading(false);
            setConsult(false);
          })
          .catch((e) => console.warn(e));
      }
    };
    fetchAPI();
  }, [consult]);

  console.log(data);
  return (
    <Fragment>
      {/* <Header title="React weather App" /> */}
      <div className="container">
        <div className="wrapper">
          <Form
            search={search}
            setSearch={setSearch}
            setConsult={setConsult}
            setError={setError}
            error={error}
          />

          <div className="card">
            {Object.keys(data).length === 0 ? (
              <div className="card"></div>
            ) : (
              <Result data={data} />
            )}
            {/* {loading ? <Loader /> : <Result data={data} />} */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
