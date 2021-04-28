import React from "react";

const Form = ({ setSearch, search, setConsult, setError, error }) => {
  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
    }
    setError(false);
    setConsult(true);
  };

  return (
    <form className="card-content">
      {error && <p className="error">Oops, error...fill the fields please</p>}
      <div className="input-group">
        <label htmlFor="city" className="label">Enter the city:</label>
        <input
          className="input"
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="input-group">
        <label htmlFor="country" className="label">Select the country:</label>
        <select
          className="select"
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">- Select -</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="MX">Mexico</option>
          <option value="US">United States</option>
          <option value="PE">Peru</option>
        </select>
      </div>
      <button className="button" onClick={handleSubmit}>
        Get weather
      </button>
    </form>
  );
};

export default Form;
