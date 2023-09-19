import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const navigate = useNavigate();
  // onSubmit

  // todo: get the primary image from images
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onDoubleClick={()=>navigate("/newRecord")}>
        <CardMedia
          component="img"
          height="300"
          image="/newComponent.png"
          alt="Add component"
        />
        <Typography variant="body1" color="text.primary">
          Doubleclick to add a new Candidate
        </Typography>
      </CardActionArea>
    </Card>
  );
}
//TODO: turn off buttons if not on the admin page
