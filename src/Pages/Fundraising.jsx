import { useLoaderData } from "react-router-dom";
import ViewCard from "../Elements/ViewCard";
import Checkout from "../Elements/Checkout";
import { Button, Modal } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Fundraising() {
  const { fundraising } = useLoaderData();
  const [open, setOpen] = useState(false);
  // console.log("Fundraising", fundraising)
  return (
    <>
      <h1>Current Fundraisers</h1>
      {fundraising.map((candidate, i) => (
        <>
        <Button
          size="small"
          color="primary"
          variant="contained"
          type="submit"
          onClick={() => setOpen(true)}
        >
          Donate
        </Button>
        <ViewCard key={i} family={candidate} progress={1}/>
        {open && 
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Checkout/>
        </Box>
      </Modal>
        }
        </>
        ))}
    </>
  );
}