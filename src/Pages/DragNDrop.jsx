// https://codesandbox.io/s/react-dnd-example-try06

import { useState } from "react";
import { DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { COLUMN_NAMES } from "./constants";
import { tasks } from "./tasks";
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

  const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
  console.log(DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE);
  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title="Incomplete Applications" className="column incomplete">
          {returnItemsForColumn(DO_IT)}
        </Column>
        <Column title="Accepted Applications" className="column accepted">
          {returnItemsForColumn(IN_PROGRESS)}
        </Column>
        <Column
          title="Projects in fundraising"
          className="column fundraising"
        >
          {returnItemsForColumn(AWAITING_REVIEW)}
        </Column>
        <Column title="Projects in Planning" className="column planning">
          {returnItemsForColumn(DONE)}
        </Column>
        <Column title="Completed Projects" className="column completed">
          {returnItemsForColumn(DONE)}
        </Column>
      </DndProvider>
    </div>
  );
}
