import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Hero from "../Elements/Hero";
import {  Container, Stack } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import { makeStyles } from "@mui/styles";
 
const styles = makeStyles(() => ({
  bg: {
    backgroundImage: 'url("/hands.jpeg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    opacity: 0.5, // Adjust the opacity as needed
    position: 'absolute',
    top: 100,
    left: 0,
    zIndex: -1,
  }
}));

export default function Home() {
  const { images } = useLoaderData();
  const style = styles();
  return (
    <div>
    <div className={style.bg}/>
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1,
      }}
    >
      <Hero />
      <Container maxWidth="sm">
        <ImageGallery items={images} autoPlay={true} />
      </Container>
    </Stack>
    </div>
  );
}
