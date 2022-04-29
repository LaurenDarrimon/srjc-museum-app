import update from "immutability-helper";
//import { set } from "lodash";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import  Box  from "./Box.js";
import { ItemTypes } from "../../utils/ItemTypes.js";
import { potteryData } from "../../assets/data/southwest-data.js";

const styles = {
  width: "90vw",
  height: 300,
  margin: "0 auto",
  border: "1px solid black",
  position: "relative"
};

const PotteryDNDContainer = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(false);
  const [boxes, setBoxes] = useState({
    a: {
      top: 20,
      left: 10,
      title: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.57 157.71">
          <g id="box-0" data-name="box-0">
            <path d="M4.83,0C78.19,10.25,152.61,6,225.57.54,204.82,12,179,14.76,156.13,21.55c-4.93,9.83-7.83,21.48-16,30-4.65,10.11,2.09,23.36,2.46,34.36a337,337,0,0,0,12.16,46.44c.41,6,10.36,17.87,1.21,19.95a126.69,126.69,0,0,1-27.88,4.35c-11.12-.38-58.33,4.56-61.9-4.3C71.55,120.08,78.34,88,83.55,55.69c-3-9.87-11.66-17.62-13.86-28.23-1.18-3.19-1.17-8-5-9.18C59.87,17.7-20.17,3.34,4.82.09ZM110.61,138l-1.16,0c-1.41-3.29-.06-7.4-1.41-10.52-3.82-5.22-6.84-22-14.56-19.8-5.56,8-.51,21.66-5.51,30-2.77-5,.81-11.47-.78-16.89-2.28-3.08-4.73-18.88-9.84-12.54-.28,12.4-13.77,35.17-1.07,43.25.5-2.53,1-5.06,1.51-7.58l1.13.15v8.53c5.59-1.71,10.15-2,9.87-8.67h1.09c.44,2.3.84,5.07,2.41,6.81,1.27.81,5.59,3.93,5.65.75.09-1.93-.36-3.92.87-5.6,1.81,1.78,1.38,4,1.77,6.5,6.93-2.21,5.61-2.81,7.44-8.77,2.51,1.13.63,6.43,4.36,6.92,9.22,3.53,9.64,4.72,9.14-5.87l.78-.24c2.71,1.76,0,9.57,4.11,8.07,2.61-2.14,9.19-2.17,8.55-6.47-1.67-6.95-1.69-14.88-4.9-21.27-3.51-3.91-15.82-25.46-19.85-14.28C110.44,119.67,112.13,129,110.61,138ZM135.07,57c-38.65,56.18-47.55-23.76-50.24,12,0,7.55-8.47,26.91-3.53,31.54,2.44,4.58,3.87,9.9,6.38,14.54l.77-.11c1.07-6.44-1.29-14.67,2.72-20,.55,1.16,1.69,3.55,2.79,3.83,7.21,2.45,7.79,15.42,13.21,21.09,1.53-7.23-1.28-15.12.62-21.72,12,.61,13.72,15.49,22,22.32,2.29-6.32-5.45-18.16-2.12-23.76,8,3.28,11.78,10.37,17.31,17l.85-.4C140.93,94.91,136.44,76.55,135.07,57ZM198,7.07l-.12-.77c-19.88.42-39.72,3.24-59.65,3.27-6-.57-.36,34.08-.73,40.2C166.55,4.43,134.94,26.12,198,7.07ZM84.41,49.43c.24-5.12,9.55-40.12,4.21-38.81-25.07-1.24-50-3.57-74.95-6.55l-.1.69C90.92,23.86,53.81-2.11,84.41,49.43ZM132.74,19c-5.55,3.68-9.77,9.36-16.89,11.1-1.95,1.23-1.62,4.56-2.49,6.49-2.14,3.72-4.65-.53-4-3.23-2.4-6-12.25-6.69-15.88-12.77-1.89,6.94-2.51,14.73-3.89,22,.32,3.4,6.28.2,8.68.8C131.93,38.78,136.25,52.84,132.74,19Zm16.16,131.3c2.5-2.65,7.65-3.83,6.32-8-2.89-7.28-4.37-15.28-8-22.2-3.34-2.9-12.19-19.06-15.59-10.47,2,12,3.9,23.91,5.9,35.85.41,4,5,3.53,8,4.81.94-3.18-1.9-6.06,1.06-8.75C147.31,144.21,148,146.92,148.9,150.25Zm-30.51-83.7c2.87-2.59,7.09-8.16,7.31-12-6.28,5.14-5.09,11.74-11.61,1.22l-.63.45Q115.92,61.38,118.39,66.55ZM98,52.43c.05.4.09.79.14,1.19l35.28-2.49-.08-1.06Zm12.58,4-1.05-.75c-7.66,12.83-4.58.65-10.4,1.46C105.52,67.23,105.17,66.71,110.54,56.38ZM112.09,30c-.16-4.84,2-9.68,0-13.8C109.32,19.35,110.82,25.63,112.09,30ZM121,18c1.43,2.6,2.09,2.63,3.75.2A20.51,20.51,0,0,1,121,18Z" />
          </g>
        </svg>
      ),
      imgName: potteryData[0].title
    },
    b: {
      top: 20,
      left: 40,
      title: "B",
      imgName: potteryData[1].title
    },
    c: {
      top: 20,
      left: 80,
      title: "C",
      imgName: potteryData[2].title
    },
    e: {
      top: 20,
      left: 100,
      title: "D",
      imgName: potteryData[3].title
    },
    g: {
      top: 50,
      left: 120,
      title: "E",
      imgName: potteryData[4].title
    },
    h: {
      top: 50,
      left: 140,
      title: "F",
      imgName: potteryData[5].title
    },
    i: {
      top: 50,
      left: 160,
      title: "G",
      imgName: potteryData[6].title
    }
  });

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top }
          }
        })
      );
    },
    [boxes, setBoxes]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      }
    }),
    [moveBox]
  );

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title, imgName } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            imgName={imgName}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
            {imgName}
          </Box>
        );
      })}
    </div>
  );
};

export default PotteryDNDContainer;