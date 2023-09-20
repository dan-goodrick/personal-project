
import Checkbox from "../Widgets/Checkbox";

// const cld = new Cloudinary({cloud: {cloudName: 'dyozbgxgo'}});
//https://formik.org/docs/tutorial
// And now we can use these
const ShowImages = ({ imgArr, setImgArr}) => {
  
  return (
    <>
      {imgArr.map((img) => (
        <p key={img.imageUrl}>
        {img.imageUrl} 
        {img.primary ? 
        <>&#x2713;</> : 
        <button id="promote" onClick={handlePromote}>&#x2934;</button>}
        <button id="delete" onClick={handleDelete}>&times;</button>
        </p>
      ))}
    </>
  );
};

export default ShowImages;
