import {Cloudinary} from "@cloudinary/url-gen";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "../Widgets/Text";
import Checkbox from "../Widgets/Checkbox";
import Button from "@mui/material/Button";

const cld = new Cloudinary({cloud: {cloudName: 'dyozbgxgo'}});
//https://formik.org/docs/tutorial
// And now we can use these
const ShowImages = ({ imgArr}) => {
  return (
    <>
      {imgArr.map((img) => (

      ))}
    </>
  );
};

export default ShowImages;
