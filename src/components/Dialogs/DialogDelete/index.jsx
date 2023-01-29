import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import api from '../../../api';
import Trash from '../../../assets/imgs/Trash.png';
import { Image } from './styles';

export default function DialogDelete(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(props.type);
  const [companyId, setCompanyId] = useState(props.companyId);
  const [companyName, setCompanyName] = useState(props.companyName);

  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState(props.locationName);

  const handleClickOpen = () => {
    setOpen(true);
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
              A empresa {companyName} será excluída. Tem certeza dessa opção
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
            </DialogContent>
          </>
        )}

        {type === 'Local' && (
          <DialogContent>
            <DialogTitle>
              O local {localName} será excluído. Tem certeza dessa opção
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
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
