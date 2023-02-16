import { useEffect, useState } from "react";

function withLoader(Element, url) {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function loadData() {
        const res = await fetch(url);

        const data = await res.json();

        setData(data.message);
      }

      loadData();
    }, []);

    if (!data) {
      return <p>Loading .....</p>;
    }

    return <Element data={data} />;
  };
}

export default withLoader;
