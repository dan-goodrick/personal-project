import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Checkbox from "../Widgets/Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";


//https://formik.org/docs/tutorial
// And now we can use these
const AddImage = ({ setAddImage, setImgArr, imgArr}) => {
  return (
    <>
      <Formik
        initialValues={{
          imageUrl: "",
          primary: imgArr.length?false:true,
        }}
        validationSchema={Yup.object({
          imageUrl: Yup.string().max(150, "Must be 150 characters or less"),
          primary: Yup.bool()
        })}
        onSubmit={ (values) => {
          console.log("values to write", values)
          setImgArr([...imgArr, values])
          setAddImage(false)
        }}
      >
        <Form>
          <Text
            label="Image URL"
            name="imageUrl"
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

export default AddImage;
