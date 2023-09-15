import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteCandidate({candidate, setDeleting}) {
  const [open, setOpen] = React.useState(false);

  console.log("Removing candidate", candidate)

  const handleApprove = async () => {

    const { data } = await axios.delete(`/api/candidate/auth/${candidate.candidateId}`);
    console.log(`deleted %{id}`, data);
    window.location.reload();
    setDeleting(false)
  };

  const handleCancel = () => {
    setOpen(false);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Delete the ${candidate.lastName} family`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to delete the {`${candidate.lastName}`} family from our records?  This step is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleApprove}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}