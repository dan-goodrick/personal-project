import { useLoaderData } from "react-router-dom";
import { useState } from "react";
// import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
// import AdminTools from "../Elements/AdminTools";
// import Move from "../Elements/Move";
// import ShowAdminData from "../Elements/ShowAdminData";

import Phase from "../Elements/Phase";
import {styled} from '@stitches/react'


const StyledColumns = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  margin: '10vh auto',
  width: '80%',
  height: '80vh',
  gap: '8px'
})

export default function Admin() {
  
  const { candidates } = useLoaderData();
  // const [moving, setMoving] = useState(false);

  const labels = {
    1: "Applications in Progress",
    2: "Completed Build Applications",
    3: "Projects in fundraising",
    4: "Projects in Planning",
    5: "Completed Projects"
  }
  let phases = {}
  for (let i = 1; i<=5; i++){
    phases[i] = {id: labels[i],
      list: candidates.filter((el) => el.phase.phaseId == i)}
  }
  const [columns, setColumns] = useState(phases)
console.log("columns:", columns);
  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    // TODO: implement in-phase sorting later
    // if (start === end) {
    //   // Move the item within the list
    //   // Start by making a new list without the dragged item
    //   const newList = start.list.filter(
    //     (_: any, idx: number) => idx !== source.index
    //   )

    //   // Then insert the item at the right location
    //   newList.splice(destination.index, 0, start.list[source.index])

    //   // Then create a new copy of the column object
    //   const newCol = {
    //     id: start.id,
    //     list: newList
    //   }

    //   // Update the state
    //   setColumns(state => ({ ...state, [newCol.id]: newCol }))
    //   return null
    // } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_, idx) => idx !== source.index
      )

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      }

      // Update the state
      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    // }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledColumns>
        {Object.values(columns).map((phase) => (
          <Phase phase={phase} key={phase.id} />
        ))}
      </StyledColumns>
    </DragDropContext>
  )
  
}
// (
//   <>
//     <h1>Admin Page</h1>
//     <AdminTools moving={moving} setMoving={setMoving} /> 
//     {moving ? <Move labels={labels} phases={phases}/> :
//     <ShowAdminData labels={labels} phases={phases}/>}
//   </>
// );
// https://codesandbox.io/s/drag-and-drop-8fbtg?file=/package.json:94-122