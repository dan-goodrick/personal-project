import { Form } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import axios from 'axios'
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


export default function Donate( {open, setOpen, candidate}) {
  const createCheckoutSession = async () => {
    try {
      const {data} = await axios.post(`/api/create-checkout-session/${candidate}`)
      location.replace(data)
    } catch (err) {
      console.log(err)
    }
  }
  // console.log("Fundraising", fundraising)
  return (
    <>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center">
              <div className="bg-white rounded-md p-12 bg-opacity-70">
              <Form onSubmit={createCheckoutSession}>
              <Button
                type="submit"
              >
                Donate
              </Button>
            <p>
              By clicking "Donate," you will be securely redirected to the
              Stripe website for secure payment.
            </p>
          </Form>
              </div>
            </div>
          </Box>
        </Modal>


    </>
  );
}
