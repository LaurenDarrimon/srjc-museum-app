import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
const style = {
    padding: '1rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};
export const OptionBox = function OptionBox( props ) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item:  props.option ,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (props && dropResult && props.option === props.answer) {
                alert(`${props.correctMessage} ` );
            }

            if (props && dropResult && props.option !== props.answer) {
                alert(` ${props.wrongMessage}`);
            }


        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    const opacity = isDragging ? 0.4 : 1;
    return (<div ref={drag} role="Box" className="answers" style={{ ...style, opacity }} data-testid={`box-${props.option}`}>
			{props.option}
		</div>);
};