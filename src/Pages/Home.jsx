import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

//TODO: add top card for each category past, current fundraising

export default function Home() {
  const { projects, images } = useLoaderData();

  return (
    <>
      <h1>Builders of Hope</h1>
      <ImageGallery items={images} autoPlay={true} />
      {projects.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}
