// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
