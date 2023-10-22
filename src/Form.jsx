const Form = ({ Animals, Breeds, setAnimal, setRequestObj }) => {
  return (
    <form
      onSubmit={(e) => {
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestObj(obj);
      }}
    >
      <label htmlFor="location">Location</label>
      <input id="location" name="location" placeholder="Search" />
      <label htmlFor="animal">Animal</label>
      <select
        id="animal"
        name="animal"
        disabled={!Animals.length}
        onChange={(e) => {
          setAnimal(e.target.value);
        }}
      >
        <option />
        {Animals.map((animal) => (
          <option key={animal}>{animal}</option>
        ))}
      </select>
      <label htmlFor="breed">Breed</label>
      <select id="breed" name="breed" disabled={!Breeds.length}>
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
