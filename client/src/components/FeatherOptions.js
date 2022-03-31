import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

import { Card } from "react-bootstrap";

import feather from "../assets/images/great-plains/feather.png";

const style = {
  padding: "1rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const FeatherOptions = function FeatherOptions(props) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: props.option,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (props && dropResult && props.rightAnswer) {
        alert(
          `That's right! That was a deed worth or a feather in a war bonnet. `
        );

        //working here to chnage the fill color of feathers with a given class 
        let featherToColor = document.getElementsByClassName('feather1');

        console.log("featherToColor:")
        console.log(featherToColor)
        //console.log(featherToColor.attributes.fill.value)
      }

      if (props && dropResult && !props.rightAnswer) {
        alert(` Hmm, not quite right! Please try again.`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      className="featherCard"
      style={{ ...style, opacity }}
      data-testid={`box-${props.number}`}
    >
      <Card style={{ width: "16rem" }} >
        <Card.Img variant="top" src={feather} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.deed}
          </Card.Text>
          {/* later we can add a more info button as a stretch goal */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <h5></h5>
      <p></p>
    </div>
  );
};
