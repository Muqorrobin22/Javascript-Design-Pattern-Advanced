import { useState, useEffect } from "react";

export function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchDogs() {
      const res = await fetch(
        "https://dog.ceo/api/breed/labrador/images/random/6"
      );
      const data = await res.json();
      setDogs(data.message);
    }

    fetchDogs();
  }, []);

  return dogs;
}
