import { Formik, Form } from "formik";
import Text from "../Widgets/Text";
import Checkbox from "../Widgets/Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

// setAddImage and updateDB are required props.  
// setImgArr and imgArr are needed if updateDb=false
const AddImage = ({ setAddImage, setImgArr, imgArr, updateDb}) => {
  return (
    <Grid container direction='row' ml={10}>
      <Formik
        initialValues={{
          original: "",
          primary: imgArr.length?false:true,
        }}
        onSubmit={ (values) => {
          if (updateDb){
            // console.log("values sent to db", values)
            axios.post(`/api/image/`, values)
            .then((res) => {
              console.log("added Image:", res)
              })
            .catch((error) => {console.error(`Unable to add ${values.lastName}`, error)});
          } else {
            console.log("update imgArr", [...imgArr, values])
            setImgArr([...imgArr, values])

          }
          setAddImage(false)
        }}
      >
      <Grid container direction="row">
        <Form>
          <Text
            label="Image URL:"
            name="original"
            type="text"
            placeholder="https..."
          />
          <Checkbox name="primary" >Primary Image</Checkbox>

          <div>
            <Button
              onClick={() => setAddImage(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
        </Grid>
      </Formik>
    </Grid>
  );
};

export default AddImage;
