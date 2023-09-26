import { useLoaderData } from "react-router-dom";
import ViewCandidate from "../Elements/ViewCandidate";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

//TODO: add top card for each category past, current fundraising

export default function Home() {
  const { projects } = useLoaderData();

  
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <h1>Builders of Hope</h1>
      <ImageGallery items={images} />
      {projects.map((candidate) => (
        <ViewCandidate key={candidate.candidateId} candidate={candidate} />
        ))}
    </>
  );
}
