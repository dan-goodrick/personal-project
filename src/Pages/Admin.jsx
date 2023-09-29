import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import AdminTools from "../Elements/AdminTools";
import Move from "../Elements/Move";
import ShowAdminData from "../Elements/ShowAdminData";



export default function Admin() {
  
  const { candidates } = useLoaderData();
  const [moving, setMoving] = useState(false);

  const labels = {
    1: "Applications in Progress",
    2: "Completed Build Applications",
    3: "Projects in fundraising",
    4: "Projects in Planning",
    5: "Completed Projects"
  }
  let phases = []
  for (let i = 1; i<=5; i++){
    phases.push(candidates.filter((el) => el.phase.phaseId == i))
  }


  return (
    <>
      <h1>Admin Page</h1>
      <AdminTools moving={moving} setMoving={setMoving} /> 
      {moving ? <Move labels={labels} phases={phases}/> :
      <ShowAdminData labels={labels} phases={phases}/>}
    </>
  );
}
