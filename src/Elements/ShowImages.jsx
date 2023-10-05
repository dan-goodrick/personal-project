import { Grid } from "@mui/material";


const ShowImages = ({ imgArr, setImgArr}) => {
  const makePrimary = (i) => {
    let thisArr = [...imgArr]
    // console.log("imgArrbefore", thisArr);
    thisArr[0].primary=false
    thisArr.unshift(thisArr.splice(i,1)[0])
    thisArr[0].primary=true
    // console.log("imgArrAfter", thisArr);
    setImgArr(thisArr)
   }
  const handleDelete = (i) => {
    let thisArr = [...imgArr]
    // console.log("imgArrbefore", thisArr);
    thisArr.splice(i,1)
    // console.log("imgArrAfter", thisArr);
    setImgArr(thisArr)
   }
   console.log("imgArr", imgArr)
  return (
    <Grid  direction="column" spacing={0} ml={5}>
      {imgArr.map((img, i) => (
        <p key={i} > {i}.&nbsp;&nbsp;
        {img.original} 
        {img.primary ? 
        <>&#x2713;</> : 
        <button id="promote" onClick={()=>makePrimary(i)}>&#x2013;</button>}
        <button id="delete" onClick={()=>handleDelete(i)}>&times;</button>
        </p>
      ))}
    </Grid>
  );
};

export default ShowImages;
