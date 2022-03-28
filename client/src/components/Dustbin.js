import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';

const style = {
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Dustbin = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#2e234a';
    if (isActive) {
        backgroundColor = '#4c9ba8';
    }
    else if (canDrop) {
        backgroundColor = '#ca9938';
    }
    return (<div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
			{isActive ? 'Release to drop' : 'Drag your answer here'}
            <br></br>
            <br></br>

            <img
                className="characters"
                id="main-pic"
                style={{maxWidth:"30%"}}
                src={require(`../assets/images/${props.image}`)}
              />

		</div>);
};