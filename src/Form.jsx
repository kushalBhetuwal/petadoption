const Form = ({
  Animals,
  requestPets,
  Breeds,
  setAnimal,
  animal,
  breed,
  setBreed,
  location,
  setLocation,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
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
          <option key={breed}>{breed}</option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};

export default Form;
