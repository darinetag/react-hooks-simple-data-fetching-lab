import React, { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message); // Use data.message to set the dog state
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img
        src="https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
        alt="A Random Dog"
      ></img>
    </div>
  );
}

export default App;
