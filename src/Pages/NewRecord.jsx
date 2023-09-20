import AddCandidate from "../Elements/AddCandidate";
import AddPerson from "../Elements/AddPerson";
import AddImage from "../Elements/AddImage";
import ShowImages from "../Elements/ShowImages";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowPeople from "../Elements/ShowPeople";


export default function NewRecord() {
  const navigate = useNavigate();
  const [addCandidate, setAddCandidate] = useState(false);
  const [addPerson, setAddPerson] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [imgArr, setImgArr] = useState([]);
  const [peopleArr, setPeopleArr] = useState([]);



  const handleImage = () => { 
    setAddImage(true)
  }
  const handleNewCandidate = (candidate) => { 
    console.log("values to write", candidate)
    // axios.post(`/api/candidate/auth/`, candidate) // arrays of objects for for images and people
    //   .then((res) => {
    //     console.log("added person:", res);
    //     setAddCandidate(false)
    //     navigate("/admin");
    //   })
    //   .catch((error) => {
    //     console.error(`Unable to add ${candidate.lastName}`, error);
    //   });
   }
  return (
    <>

      <h1>Images</h1>
      <ShowImages imgArr={imgArr} setImgArr={setImgArr} />
      {addImage ? 
        <AddImage setAddImage={setAddImage} setImgArr={setImgArr}  imgArr={imgArr} updateDb={false} /> :
        <Button size="small" color="primary" variant="contained" onClick={() => setAddImage(true)} >Add Image</Button>
      }
      <h1>People</h1>
      <ShowPeople people={peopleArr} setPeopleArr={setPeopleArr} />
      {addPerson ? 
        <AddPerson setAddPerson={setAddPerson} setPeopleArr={setPeopleArr}  peopleArr={peopleArr} updateDb={false} /> :
        <Button size="small" color="primary" variant="contained" onClick={() => setAddPerson(true)} >Add Person</Button>
      }
      <form onSubmit={()=>handleNewCandidate({})}>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => setAddCandidate(false)}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
            >
              Save Candidate
            </Button>
          </form>
    </>
  );
}
      // <AddPerson />
      // <AddCandidate /> 