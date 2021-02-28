import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

function SimpleDialog({ onClose, open, title }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
    </Dialog>
  );
}

export default SimpleDialog;
