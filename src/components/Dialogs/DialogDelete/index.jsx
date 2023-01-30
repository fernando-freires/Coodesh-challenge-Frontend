import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import api from '../../../api';
import Trash from '../../../assets/imgs/Trash.png';
import CustomizedSnackbars from '../../../components/Feedbacks';

export default function DialogDelete(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(props.type);
  const [companyId, setCompanyId] = useState(props.companyId);
  const [companyName, setCompanyName] = useState(props.companyName);

  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState(props.locationName);

  const [state, setState] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setState(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await api.delete(`/api/v1/companies/${companyId}`);
    document.location.reload(true);
  };

  const handleDeleteLocal = async () => {
    await api.delete(`/api/v1/locations/${localId}`);
    document.location.reload(true);
  };

  return (
    <div>
      <img src={Trash} alt="" onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        {type === 'Empresa' && (
          <>
            <DialogTitle>
              A empresa <b>{companyName}</b> será excluída. Tem certeza dessa
              ação?
            </DialogTitle>
            <DialogContent>
              <DialogActions>
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleDelete}
                >
                  Excluir
                </Button>
              </DialogActions>
              <CustomizedSnackbars
                message="Realmente deseja excluir?"
                type="warning"
                state={state}
              />
            </DialogContent>
          </>
        )}

        {type === 'Local' && (
          <DialogContent>
            <DialogTitle>
              O local <b>{localName}</b> será excluído. Tem certeza dessa ação?
            </DialogTitle>
            <DialogActions>
              <Button
                color="error"
                variant="contained"
                onClick={handleDeleteLocal}
              >
                Excluir
              </Button>
            </DialogActions>
            <CustomizedSnackbars
              message="Realmente deseja excluir?"
              type="warning"
              state={state}
            />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
