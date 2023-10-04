import { useState } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breeds = ["poodle"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Search"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          disabled={!Animals.length}
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {Animals.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={!Breeds.length}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {Breeds.map((breed) => (
            <option key="breed">{breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
