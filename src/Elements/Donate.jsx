import { Form } from "react-router-dom";
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

export default function Donate( {open, setOpen, lastName}) {
  const [openPayment, setOpenPayment] = useState(false);
  const [amount, setAmount] = useState(0);
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
                <Form >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    prefix="$"
                    id="donation"
                    label="Donation Amount"
                    autoFocus
                    onChange={e=>setAmount(e.target.value)}
                  />
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    disabled={!amount}
                    onClick={()=>setOpenPayment(true)}
                  >
                    Go To Payment
                  </Button>
                </Form>
              </div>
            </div>
          </Box>
        </Modal>

      {openPayment && (
        <Modal
          open={openPayment}
          onClose={() => setOpenPayment(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            <div className="font-mono text-white text-opacity-70 font-[700] text-opacity-90 h-screen flex justify-center items-center">
              <div className="bg-white rounded-md p-12 bg-opacity-70">
                <StripeCheckout amount={amount} lastName={lastName}/>
              </div>
            </div>
          </Box>
          
        </Modal>
      )}
    </>
  );
}
