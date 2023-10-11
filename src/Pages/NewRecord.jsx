import AddCandidate from "../Elements/AddCandidate";
import AddPerson from "../Elements/AddPerson";
import AddImage from "../Elements/AddImage";
import ShowImages from "../Elements/ShowImages";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PersonCard from "../Elements/PersonCard";
import { Background } from "./Home";

export default function NewRecord() {
  const navigate = useNavigate();
  const [addPerson, setAddPerson] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [imgArr, setImgArr] = useState([]);
  const [people, setPeople] = useState([]);

  const handleAddPerson = (values) => {
    setPeople([...people, values]);
    setAddPerson(false);
  };

  const handleNewCandidate = (candidate) => {

    const imgArrVar = !imgArr.length? [{
      original: "/noImage.jpeg",
      primary: true,
    }] : imgArr
    
    const payload = { candidate, people, imgArrVar };
    console.log("payload", payload);
    axios
      .post(`/api/candidate/`, payload) // arrays of objects for for images and people
      .then(() => {
        // console.log("added candidate:", res);
        navigate("/admin");
      })
      .catch((error) => {
        console.error(`Unable to add ${candidate.lastName}`, error);
      });
  };
  return (
    <div>
      <Background/>
      <h1>Images</h1>
      <ShowImages imgArr={imgArr} setImgArr={setImgArr} />
      {addImage ? 
        <AddImage setAddImage={setAddImage} setImgArr={setImgArr}  imgArr={imgArr} updateDb={false} /> :
        <Button size="small" color="primary" variant="contained" onClick={() => setAddImage(true)} >Add Image</Button>
      }
      <h1>People</h1>
      {people.map((person, i) => <PersonCard key={i} person={person} i={i} /> )}
      {addPerson ? 
        <AddPerson handleAddPerson={handleAddPerson} setAddPerson={setAddPerson} /> :
        <Button size="small" color="primary" variant="contained" onClick={() => setAddPerson(true)} >Add Person</Button>
      }
      <AddCandidate handleNewCandidate={handleNewCandidate} />
    </div>
  );
}
