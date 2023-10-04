import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Hero from "../Elements/Hero";
import { Container, Stack } from "@mui/material";
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Home() {
  const { images } = useLoaderData();
  return (
    <Stack spacing={2} sx={{
      display: "flex",
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
    <Hero />
    <Container maxWidth="sm" >
    <ImageGallery items={images} autoPlay={true} />
    </Container>
    </Stack>
  );
}