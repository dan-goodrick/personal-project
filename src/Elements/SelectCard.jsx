import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import ViewCandidate from "./ViewCandidate";



export default function SelectCard({ candidate }) {

  // todo: get the primary image from images

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea >
      <ViewCandidate candidate={candidate}/>
      </CardActionArea>
    </Card>
  );
}
