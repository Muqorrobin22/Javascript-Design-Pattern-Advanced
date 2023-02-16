import { useEffect, useState } from "react";

function withLoader(Element, url) {
  return (props) => {
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

    return <Element {...props} data={data} />;
  };
}

export default withLoader;
