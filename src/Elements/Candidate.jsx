import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import Button from "@mui/material/Button";
import Family from './Family';

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
          <Family members={candidate.people}/>
          <Typography variant="body1" color="text.primary">Application Data</Typography>
          <Typography variant="body2" color="text.secondary">Municipality: {candidate.municipality}</Typography>
          <Typography variant="body2" color="text.secondary">Lat/Lon: 
          <Link href={candidate.googleMaps}>
          {candidate.lat.toFixed(5)}, {candidate.lon.toFixed(5)}
          </Link>
          </Typography>
          <Button size="small" color="primary" variant="contained">Edit</Button>
          <Button size="small" color="primary" variant="outlined">Delete</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
