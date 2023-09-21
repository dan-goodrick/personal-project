
import Checkbox from "../Widgets/Checkbox";

// const cld = new Cloudinary({cloud: {cloudName: 'dyozbgxgo'}});
//https://formik.org/docs/tutorial
// And now we can use these
const ShowImages = ({ imgArr, setImgArr}) => {
  const makePrimary = (i) => {
    let thisArr = [...imgArr]
    console.log("imgArrbefore", thisArr);
    thisArr[0].primary=false
    thisArr.unshift(thisArr.splice(i,1)[0])
    thisArr[0].primary=true
    console.log("imgArrAfter", thisArr);
    setImgArr(thisArr)
   }
  const handleDelete = (i) => {
    let thisArr = [...imgArr]
    console.log("imgArrbefore", thisArr);
    thisArr.splice(i,1)
    console.log("imgArrAfter", thisArr);
    setImgArr(thisArr)
   }

  return (
    <>
      {imgArr.map((img, i) => (
        <p key={i} >
        {img.imageUrl} 
        {img.primary ? 
        <>&#x2713;</> : 
        <button id="promote" onClick={()=>makePrimary(i)}>&#x2013;</button>}
        <button id="delete" onClick={()=>handleDelete(i)}>&times;</button>
        </p>
      ))}
    </>
  );
};

export default ShowImages;
