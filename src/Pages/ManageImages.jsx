import AddImage from "../Elements/AddImage";
import ShowImages from "../Elements/ShowImages";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { Background } from "./Home";

export default function NewRecord() {
  const navigate = useNavigate();
  const [addImage, setAddImage] = useState(false);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    axios
      .get("/api/projectImages")
      .then((res) => setImgArr(res.data))
      .catch((error) =>
        console.error(`Error in getting project images`, error)
      );
  }, []);
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
  return (
    <div>
      <Background/>
      <Typography variant="h4">Images</Typography>
      <ShowImages imgArr={imgArr} setImgArr={setImgArr} />
      {addImage && (
        <AddImage
          setAddImage={setAddImage}
          setImgArr={setImgArr}
          imgArr={imgArr}
          updateDb={false}
        />
      )}
      <Stack direction='row' justifyContent={"space-evenly	"}>
        <Button onClick={() => setAddImage(true)}>Add Image</Button>
        <Button onClick={handleUpdateImages}>Save</Button>
        <Button onClick={() => navigate("/admin")}>
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
