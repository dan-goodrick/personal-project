import AddImage from "../Elements/AddImage";
import ShowImages from "../Elements/ShowImages";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styles } from "./Home";

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
        console.log("Project Images: ", res);
      })
      .catch((error) => {
        console.error(`Error in handleUpdateImages`, error);
      });
    navigate("/admin");
  };
  const style = styles();
  return (
    <div>
      <div className={style.bg} />
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
    </div>
  );
}
