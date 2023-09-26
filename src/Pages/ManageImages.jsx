import AddCandidate from "../Elements/AddCandidate";
import AddPerson from "../Elements/AddPerson";
import AddImage from "../Elements/AddImage";
import ShowImages from "../Elements/ShowImages";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowPeople from "../Elements/ShowPeople";

export default function NewRecord() {
  const navigate = useNavigate();
  const [addImage, setAddImage] = useState(false);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => { 
    axios
    .get("/api/projectImages")
    .then((res) => setImgArr(res.data))
    .catch((error) => console.error(`Error in getting project images`, error))
   }, [])
  const handleUpdateImages = () => {
    console.log("payload", imgArr);
    axios
      .post(`/api/projectImages`, imgArr)
      .then((res) => {
        navigate("/admin");
      })
      .catch((error) => {
        console.error(`Error in handleUpdateImages`, error);
      });
  };
  return (
    <>
      <h1>Images</h1>
      <ShowImages imgArr={imgArr} setImgArr={setImgArr} />
      {addImage ? (
        <AddImage
          setAddImage={setAddImage}
          setImgArr={setImgArr}
          imgArr={imgArr}
          updateDb={false}
        />
      ) : (
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => setAddImage(true)}
        >
          Add Image
        </Button>
      )}
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={handleUpdateImages}
      >
        Done with Images
      </Button>
    </>
  );
}
