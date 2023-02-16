import withLoader from "./withLoader";

function DogImages(props) {
  console.log(props);
  return props.data.map((data, i) => (
    <img src={data} alt={`Dogs Data ${i}`} key={i} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
