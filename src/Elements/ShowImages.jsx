import { Box, Button, Grid, Stack } from "@mui/material";

const ShowImages = ({ imgArr, setImgArr }) => {
  const makePrimary = (i) => {
    let thisArr = [...imgArr];
    // console.log("imgArrbefore", thisArr);
    thisArr[0].primary = false;
    thisArr.unshift(thisArr.splice(i, 1)[0]);
    thisArr[0].primary = true;
    // console.log("imgArrAfter", thisArr);
    setImgArr(thisArr);
  };
  const handleDelete = (i) => {
    let thisArr = [...imgArr];
    // console.log("imgArrbefore", thisArr);
    thisArr.splice(i, 1);
    // console.log("imgArrAfter", thisArr);
    setImgArr(thisArr);
  };
  console.log("imgArr", imgArr);
  return (
    <Grid container direction="row" align={"center"}  >
      {imgArr.map((img, i) => (
        <Grid item  direction='column' key={i} xs={5} md={3} my={1} align={"center"} >
          <Box
          item
            component="img"
            sx={{ maxWidth: 200, maxHeight: 200 }}
            alt="Image"
            src={img.original}
          />
          <Stack direction='row' justifyContent={"space-evenly"}>
          {img.primary ? (
            <>&#x2713;</>
          ) : (
            <Button id="promote"  onClick={() => makePrimary(i)}>
              &#x2013;
            </Button>
          )}
          <Button id="delete" onClick={() => handleDelete(i)}>
            &times;
          </Button>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default ShowImages;
