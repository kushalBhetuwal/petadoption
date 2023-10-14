import Pet from "./Pet.jsx";
const Result = ({ pets }) => {
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            id={pet.id}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      ) : (
        <h1>No pets found</h1>
      )}
    </div>
  );
};

export default Result;
