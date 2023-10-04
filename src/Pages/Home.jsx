import { useLoaderData } from "react-router-dom";
import ImageGallery from "react-image-gallery";


export default function Home() {
  const { images } = useLoaderData();
  return (
    <>

    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('landscape.jpeg')", height: 375 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 375 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Builders of Hope</h1>
              <h4 className='mb-3'>Because we have been given much</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>We too can give!</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className='d-flex justify-content-center align-items-center h-100' style={{ padding: 10 }}>
    <ImageGallery items={images} autoPlay={true} />
    </div>
    </>
  );
}