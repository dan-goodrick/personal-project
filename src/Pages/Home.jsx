import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Hero from "../Elements/Hero";


export default function Home() {
  const { images } = useLoaderData();
  return (
    <>
    <Hero />
    {/* <ImageGallery items={images} autoPlay={true} /> */}
    </>
  );
}