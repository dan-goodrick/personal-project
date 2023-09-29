import { Form, useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import StripeCheckout from "../Elements/StripeCheckout";
import { useState } from "react";
import { Button, TextField, Modal } from "@mui/material";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Fundraising() {
  const { fundraising } = useLoaderData();

  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate, i) => (
        <>
          <ViewCard
            key={i}
            family={candidate}
          />
        </>
      ))}
    </>
  );
}
