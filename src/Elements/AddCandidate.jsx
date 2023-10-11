import { Formik, Form } from "formik";
import Text from "./../Widgets/Text";
import Select from "./../Widgets/Select";
import Checkbox from "./../Widgets/Checkbox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


//todo: title should be a select box

export default function AddCandidate( {handleNewCandidate}) {
  const navigate = useNavigate();

  return (
    <>
      <h3>Family Data</h3>
      <Formik
        initialValues={{
          phaseId: 1,
          currPhaseDate: new Date(),
          paymentCnt: 1,
          loanDuration: 30,
          currOnLoan:false,
        }}
        onSubmit={ (values) => {
          handleNewCandidate(values)
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
          <div>
          <Button
              variant="outlined"
              onClick={() => navigate("/admin")}
            >Cancel</Button>
            <Button
              type="submit"
            >Save Candidate</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
