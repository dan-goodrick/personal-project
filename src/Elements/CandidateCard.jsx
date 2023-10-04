import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Button from "@mui/material/Button";
import EditCandidate from "./EditCandidate";
import ShowCandidate from "./ShowCandidate";
import AddPerson from "./AddPerson";
import axios from "axios";

export default function CandidateCard({ candidate }) {
  const [addPerson, setAddPerson] = useState(false);
  const [editCandidate, setEditCandidate] = useState(false);
  const [candidateCopy, setCandidateCopy] = useState(candidate);
  const [peopleArr, setPeopleArr] = useState(candidate.people);

  const handleAddPerson = (values) => {
    // console.log("handleAddPersonvalues", values) // not a nested object
    const payload = { ...values };
    payload.candidateId = candidate.candidateId;
    // console.log("values to write", payload);
    axios
      .post(`/api/person/`, payload)
      .then((res) => {
        let newPeople = [...peopleArr]
        newPeople.push(res.data)
        setPeopleArr(newPeople);
        const newCandidate = {...candidateCopy}
        newCandidate.people = newPeople
        setCandidateCopy(newCandidate)
      })
      .catch((error) => {
        console.error(`Unable to add ${values.lastName}`, error);
      });
    setAddPerson(false);
  };
  // console.log("peopleArr", peopleArr);

  const handleEditCandidate = (values) => {
    const updatedCandidate = { ...candidate, ...values };
    console.log("updatedCandidate values", updatedCandidate);  
    setCandidateCopy(updatedCandidate);
    setEditCandidate(false);
    axios
      .put(`/api/candidate/${candidate.candidateId}`, updatedCandidate)
      .then((res) => {
        console.log("updated candidate:", res.data);
      })
      .catch((error) => {
        console.error(`Unable to update Candidate ${values}`, error);
      });
  };
  console.log("CandidateCard:", candidate, "editCandidate", editCandidate);
  // todo: get the primary image from images
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={candidate.images[0].original}
        alt={candidate.lastName}
      />
      <CardContent>
        {addPerson ? (
          <AddPerson
            handleAddPerson={handleAddPerson}
            setAddPerson={setAddPerson}
          />
        ) : (
          <Button

            onClick={() => setAddPerson(true)}
          >
            {" "}
            Add Person
          </Button>
        )}
        {editCandidate ? (
          <EditCandidate
            candidate={candidateCopy}
            setEditCandidate={setEditCandidate}
            handleEditCandidate={handleEditCandidate}
          />
        ) : (
          <ShowCandidate
            candidate={candidateCopy}
            setEditCandidate={setEditCandidate}
          />
        )}
      </CardContent>
    </Card>
  );
}
