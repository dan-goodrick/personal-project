import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import ViewCard from "./ViewCard";



export default function SelectCard({ candidate }) {

  // todo: get the primary image from images

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea >
      <ViewCard family={candidate}/>
      </CardActionArea>
    </Card>
  );
}
