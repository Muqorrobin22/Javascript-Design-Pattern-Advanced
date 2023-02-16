import withHover from "./withHover";
import withLoader from "./withLoader";
import "./dogImages.css";

function DogImages(props) {
  console.log(props);

  return (
    <div {...props}>
      {props.hover && <div id="hover">Hovering</div>}
      <div>
        {props.data.map((data, i) => (
          <img src={data} alt={`Dogs Data ${i}`} key={i} />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);
