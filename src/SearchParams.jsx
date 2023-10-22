import { useState } from "react";
import useBreedList from "./useBreedList";
import Result from "./Results";
import Form from "./Form";
import searchPet from "./searchPet";
import { useQuery } from "@tanstack/react-query";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [requestObj, setRequestObj] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [Breeds] = useBreedList(animal);
  const result = useQuery(["search", requestObj], searchPet);
  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-params">
      <Form
        Animals={Animals}
        Breeds={Breeds}
        setAnimal={setAnimal}
        setRequestObj={setRequestObj}
      />
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
