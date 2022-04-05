import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

import { Card } from "react-bootstrap";

const style = {
  padding: "1rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const PotteryDesigns = function PotteryDesigns(props) {

let designNum = 1

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: props.option,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (props && dropResult && designNum == 5) {
        alert(
          `That's right! You have fully designed this pot. Progress to the next question, or keep adding more designs as long as you like. Move to the next question whenever you are ready!  `
        );

        let rowToColor = document.getElementById(`pot-row${designNum}`);
        rowToColor.setAttribute("fill", "#F5B05C")
        designNum++; 
      }
      
      if (props && dropResult) {
        //change the fill color of the pottery row with a given class 
        let rowToColor = document.getElementById(`pot-row${designNum}`);

        rowToColor.setAttribute("fill", "#F5B05C")
        //increase the design number counter
        designNum++; 
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
        <Card.Img variant="top" src={require(`../assets/images/southwest/pottery/${props.image}`)} style={{ height: "20rem" }}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.description}
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
