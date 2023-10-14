import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Result from "./Results";
import Form from "./Form";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const [animal, setAnimal] = useState("");
  const [Breeds] = useBreedList(animal);
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await response.json();
    console.log(data.pets);
    setPets(data.pets);
  }
  return (
    <div className="search-params">
      <Form
        Animals={Animals}
        requestPets={requestPets}
        Breeds={Breeds}
        setAnimal={setAnimal}
        animal={animal}
        breed={breed}
        setBreed={setBreed}
        location={location}
        setLocation={setLocation}
      />
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
