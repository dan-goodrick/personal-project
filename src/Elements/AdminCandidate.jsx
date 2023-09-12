// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from "@mui/material/Button";

export default function CandidateCard( {candidate}) {
  console.log("candidate", candidate);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={candidate.images[0].imageUrl}
          alt={candidate.lastName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {candidate.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Candidate Bio
          </Typography>
          <Button size="small" color="primary" variant="contained">Edit</Button>
          <Button size="small" color="primary" variant="outlined">Delete</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
