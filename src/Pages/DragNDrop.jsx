// https://codesandbox.io/s/react-dnd-example-try06

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PHASES } from "./../constants";
import "./../css/style.css";
import MovableItem from "../Elements/MoveableItem";
import Phase from "../Elements/Phase";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { Background } from "./Home";

export default function DragNDrop() {
  const { phases } = useLoaderData();
  const navigate = useNavigate();
  const [items, setItems] = useState(phases);
  console.log("items", items);
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

  const returnItemsForColumn = (phaseName) => {
    console.log("returnItemsForColumn", items);
    return items
      .filter((item) => item.column === phaseName)
      .map((item, index) => (
        <MovableItem
          key={item.candidateId}
          lastName={item.lastName}
          url={item.image}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  const handleSubmit = () => {
    let map = {};
    for (let i in items) {
      if (items[i].phaseId !== items[i].newPhaseId) {
        map[items[i].candidateId] = items[i].newPhaseId;
      }
    }
    console.log("items", items, "map", map);
    axios
      .put(`/api/phases/`, map)
      .then(() => {
        console.log("updated phases", map);
      })
      .catch((error) => {
        console.error(`Unable to update phases`, error);
      });
    navigate("/admin");
  };
  return (
    <div>
      <Background />
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" mt={3} align={"center"}>
          Drag/Drop candidates to set build phase then click save
        </Typography>
      </Grid>
      <Grid container item xs={12} direction="row" p={2} justifyContent={"space-around"} sm={6} md={4} >
        <DndProvider backend={HTML5Backend}>
          <Phase title={PHASES[1]} className="column incomplete">
            {returnItemsForColumn(PHASES[1])}
          </Phase>
          <Phase title={PHASES[2]} className="column accepted">
            {returnItemsForColumn(PHASES[2])}
          </Phase>
          <Phase title={PHASES[3]} className="column fundraising">
            {returnItemsForColumn(PHASES[3])}
          </Phase>
          <Phase title={PHASES[4]} className="column planning">
            {returnItemsForColumn(PHASES[4])}
          </Phase>
          <Phase title={PHASES[5]} className="column completed">
            {returnItemsForColumn(PHASES[5])}
          </Phase>
        </DndProvider>
      </Grid>
      <Grid container xs={12} justifyContent={"space-around"}>
        <Button sx={{minWidth:"30vw"}} onClick={handleSubmit}>Save</Button>
        <Button color='secondary' sx={{minWidth:"30vw"}} onClick={() => navigate("/admin")}>Cancel</Button>
      </Grid>
    </Grid>
    </div>
  );
}
