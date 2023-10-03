import { Link, Typography } from "@mui/material";

export default function OrderSuccess() {


  return (
    <>
      <img src="https://buildersofhope.s3.us-west-2.amazonaws.com/boh-hoorah.jpg" style={{"width":"100%"}}/>
      <Typography>
        Thanks for your tax deductible contribution to the Builders of Hope!
      </Typography>
      <Link href="/fundraising">Return to Fundraising</Link>
      <Link href="/">Return to Homepage</Link>
    </>
  );
}
