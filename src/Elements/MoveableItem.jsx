import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { PHASES } from "./../constants";

const MovableItem = ({
  lastName,
  index,
  url,
  currentColumnName,
  moveCardHandler,
  setItems,
}) => {
  const changeItemColumn = (currentItem, columnName) => {
    setItems((prevState) => {
      return prevState.map((e) => {
        console.log(
          lastName,
          e.lastName,
          currentItem.lastName,
          columnName,
          e.column
        );
        let column = e.column;
        let newPhaseId = PHASES[e.column];
        if (e.lastName === currentItem.lastName) {
          column = columnName;
          newPhaseId = PHASES[columnName];
        }
        return {
          ...e,
          column: column,
          newPhaseId: newPhaseId,
        };
      });
    });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { index, lastName, currentColumnName, type: "Our first type" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // dropResult returns the name of the container that got the drop and the drop function
      if (dropResult) {
        const { name } = dropResult;
        console.log("dropResult", dropResult, item);
        switch (name) {
          case PHASES[1]:
            changeItemColumn(item, PHASES[1]);
            break;
          case PHASES[2]:
            changeItemColumn(item, PHASES[2]);
            break;
          case PHASES[3]:
            changeItemColumn(item, PHASES[3]);
            break;
          case PHASES[4]:
            changeItemColumn(item, PHASES[4]);
            break;
          case PHASES[5]:
            changeItemColumn(item, PHASES[5]);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
      <img
        src={url}
        style={{
          maxWidth: "100%",
          minWidth: 30,
          maxHeight: "100%",
          minHeight: 30,
        }}
      />
      {lastName}
    </div>
  );
};

export default MovableItem;
