import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes.js";

const style = {
  position: "absolute",
  border: "1px dashed gray",
  padding: "0",
  cursor: "move",
  textAlign: "center"
};

const Box = ({ id, left, top, hideSourceOnDrag, children, imgName }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top]
  );
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div
      className={`box ${imgName}`}
      ref={drag}
      style={{ ...style, left, top }}
      data-testid="box"
    >
      {children}
    </div>
  );
};

export default Box;