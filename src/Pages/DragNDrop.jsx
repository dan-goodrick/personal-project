// https://codesandbox.io/s/react-dnd-example-try06

import { useState } from "react";
import { DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PHASES } from "./../constants";
import "./../css/DragNDrop.css";
import MovableItem from "../Elements/MoveableItem";
import Column from "../Elements/Column";
import { useLoaderData } from "react-router-dom";


export default function DragNDrop() {
  const { phases } = useLoaderData();
  const [items, setItems] = useState(phases);
  console.log("items state:", items);
  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    console.log("MoveCardHandler",dragIndex, hoverIndex);
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

  const returnItemsForColumn = (phaseName) => {
    console.log("returnItems", phaseName, items);
    return items
      .filter((candidate) => candidate.phaseName === phaseName)
      .map((candidate, index) => (
        <MovableItem
          key={candidate.candidateId}
          lastName={candidate.lastName}
          url={candidate.image}
          currentColumnName={candidate.phaseName}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };


  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <Column title={PHASES[1]} className="column incomplete">
          {returnItemsForColumn(PHASES[1])}
        </Column>
        <Column title={PHASES[2]} className="column accepted">
          {returnItemsForColumn(PHASES[2])}
        </Column>
        <Column
          title={PHASES[3]}
          className="column fundraising"
        >
          {returnItemsForColumn(PHASES[3])}
        </Column>
        <Column title={PHASES[4]} className="column planning">
          {returnItemsForColumn(PHASES[4])}
        </Column>
        <Column title={PHASES[5]} className="column completed">
          {returnItemsForColumn(PHASES[5])}
        </Column>
      </DndProvider>
    </div>
  );
}
