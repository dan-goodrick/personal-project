import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Checkbox from "../Widgets/Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";
import ShowImages from "./ShowImages";


// setAddImage and updateDB are required props.  
// setImgArr and imgArr are needed if updateDb=false
const AddProjectImage = ({ setAddImage, setImgArr, imgArr}) => {
  return (
    <>
      <Formik
        initialValues={{
          original: "",
          primary: imgArr.length?false:true,
        }}
        validationSchema={Yup.object({
          original: Yup.string().max(150, "Must be 150 characters or less"),
          primary: Yup.bool()
        })}
        onSubmit={ (values) => {          
          // console.log("values sent to db", values)
          axios.post(`/api/image/`, values)
            .then((res) => {console.log("added Image:", res)})
            .catch((error) => {console.error(`Unable to add ${values.lastName}`, error)});
          // console.log("update imgArr", [...imgArr, values])
          setImgArr([...imgArr, values])
          setAddImage(false)
        }}
      >
      <ShowImages imgArr={imgArr} setImgArr={setImgArr}/>
        <Form>
          <Text
            label="Image URL"
            name="original"
            type="text"
            placeholder="https..."
          />
          <Checkbox name="primary" >Primary Image</Checkbox>

          <div>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => setAddImage(false)}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddProjectImage;
