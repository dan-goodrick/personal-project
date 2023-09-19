import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import Text from "./Text";
import Select from "./Select";
import Checkbox from "./Checkbox";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

//todo: title should be a select box

//https://formik.org/docs/tutorial
// And now we can use these
export default function AddCandidate({ candidate }) {
  const navigate = useNavigate();

  console.log("newcandidate", candidate);

  return (
    <>
      <h3>Family Data</h3>
      <Formik
        initialValues={{
          lastName: "",
          address: "",
          city: "",
          municipality: "",
          state: "",
          country: "",
          zip: "",
          title: "",
          current: "",
          videoUrl: "",
          imageUrl: "",
        }}
        validationSchema={Yup.object({
          address: Yup.string().max(150, "Must be 150 characters or less"),
          city: Yup.string().max(20, "Must be 20 characters or less"),
          municipality: Yup.string().max(20, "Must be 20 characters or less"),
          state: Yup.string().max(20, "Must be 20 characters or less"),
          country: Yup.string().max(20, "Must be 20 characters or less"),
          zip: Yup.string().max(20, "Must be 20 characters or less"),
          title: Yup.string().max(20, "Must be 20 characters or less"),
          current: Yup.string().max(20, "Must be 20 characters or less"),
          videoUrl: Yup.string().max(20, "Must be 20 characters or less"),
        })}
        onSubmit={async (values) => {
          console.log("values", values);
          await axios.post(`/api/candidate/auth/`, values);
          navigate("/admin");
          // window.location.reload();
        }}
      >
        <Form>
          <Text name="lastName" type="text" placeholder="Last Name" />
          <br />
          <Text name="address" type="text" placeholder="Address" />
          <br />
          <Text name="city" type="text" placeholder="City" />
          <Text name="municipality" type="text" placeholder="Municipality" />
          <Text name="state" type="text" placeholder="State" />
          <Text name="country" type="text" placeholder="Country" />
          <Text name="zip" type="text" placeholder="ZIP" />
          <Select label="Title" name="title">
            <option value="mortgage">Mortgage</option>
            <option value="own">Title in Hand</option>
          </Select>

          <Checkbox name="current">Current on Payments</Checkbox>

          <Text name="videoUrl" type="text" placeholder="Url of Promo Video" />
        </Form>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={navigate("/admin")}
        >
          Cancel
        </Button>
        <Button size="small" color="primary" variant="contained" type="submit">
          Save
        </Button>
      </Formik>
    </>
  );
}
