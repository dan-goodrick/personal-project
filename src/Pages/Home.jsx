import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Hero from "../Elements/Hero";
import { Box, Container, Stack } from "@mui/material";
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Home() {
  const { images } = useLoaderData();
  return (
    <Stack container spacing={2}>
    <Hero />
    <ImageGallery items={images} autoPlay={true} sx={{width:"100vw"}}/>
    </Stack>
  );
}