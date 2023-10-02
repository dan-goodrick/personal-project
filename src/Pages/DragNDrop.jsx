// https://codesandbox.io/s/react-dnd-example-try06

import { useState } from "react";
import { DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PHASES, tasks } from "./../constants";
import "./../css/DragNDrop.css";
import MovableItem from "../Elements/MoveableItem";
import Column from "../Elements/Column";


export default function DragNDrop() {
  const [items, setItems] = useState(tasks);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const copiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = copiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        copiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return copiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  const { INCOMPLETE, ACCEPTED, FUNDRAISING, PLANNING, COMPLETED } = PHASES;

  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title={INCOMPLETE} className="column incomplete">
          {returnItemsForColumn(INCOMPLETE)}
        </Column>
        <Column title={ACCEPTED} className="column accepted">
          {returnItemsForColumn(ACCEPTED)}
        </Column>
        <Column
          title={FUNDRAISING}
          className="column fundraising"
        >
          {returnItemsForColumn(FUNDRAISING)}
        </Column>
        <Column title={PLANNING} className="column planning">
          {returnItemsForColumn(PLANNING)}
        </Column>
        <Column title={COMPLETED} className="column completed">
          {returnItemsForColumn(COMPLETED)}
        </Column>
      </DndProvider>
    </div>
  );
}
