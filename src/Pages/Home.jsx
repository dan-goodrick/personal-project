import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Hero from "../Elements/Hero";
import {  Container, Stack } from "@mui/material";
import "react-image-gallery/styles/css/image-gallery.css";
import { styled } from "@mui/system";


export const Background = styled('div')({
  backgroundImage: 'url("/hands.jpeg")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  opacity: 0.5, // Adjust the opacity as needed
  position: 'absolute',
  left: 0,
  zIndex: -1,
});

export default function Home() {
  const { images } = useLoaderData();
  return (
    <div>
    <Background style={{ top: `150px` }}/>
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
