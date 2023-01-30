import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';
import api from '../../../api';
import { InputText } from './styles';
import { IMaskInput } from 'react-imask';
import CustomizedSnackbars from '../../../components/Feedbacks';

export default function DialogCreate(props) {
  const [open, setOpen] = useState(false);
  const [type, setTupe] = useState(props.type);
  const [userId, setUserId] = useState(props.userId);

  const [state, setState] = useState(false);

  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [companyId, setCompanyId] = useState(props.companyId);
  const [localName, setLocalName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setState(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postData = {
    userId,
    name,
    website,
    cnpj,
  };

  const LocationData = {
    companyId,
    name: localName,
    cep,
    street,
    number,
    neighborhood,
    city,
    UF: uf,
  };

  const handleSubmitCompany = async () => {
    await api.post('/api/v1/companies', postData);
    document.location.reload(true);
  };

  const handleSubmitLocation = async () => {
    await api.post('/api/v1/locations', LocationData);
    document.location.reload(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Adicionar {type}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar {type}</DialogTitle>
        {type === 'Empresa' && (
          <DialogContent>
            <InputText>
              <label>Nome</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </InputText>

            <InputText>
              <label>Website</label>
              <input type="text" onChange={(e) => setWebsite(e.target.value)} />
            </InputText>

            <InputText>
              <label>CNPJ</label>
              <IMaskInput
                mask="00.000.000/0000-00"
                type="text"
                placeholderChar="00.000.000/0000-00"
                onChange={(e) => setCnpj(e.target.value)}
              />
            </InputText>
            <DialogActions>
              <Button variant="contained" onClick={() => handleSubmitCompany()}>
                Adicionar
              </Button>
            </DialogActions>
            <CustomizedSnackbars
              message="Preencha os dados para poder adicionar com sucesso!"
              type="info"
              state={state}
            />
          </DialogContent>
        )}

        {type === 'Local' && (
          <DialogContent>
            <InputText>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
              />
            </InputText>

            <InputText>
              <label>CEP</label>
              <IMaskInput
                mask="00000-000"
                type="text"
                onChange={(e) => setCep(e.target.value)}
              />
            </InputText>

            <InputText>
              <label>Rua</label>
              <input type="text" onChange={(e) => setStreet(e.target.value)} />
            </InputText>

            <InputText>
              <label>Número</label>
              <input type="text" onChange={(e) => setNumber(e.target.value)} />
            </InputText>

            <InputText>
              <label>Bairro</label>
              <input
                type="text"
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </InputText>

            <InputText>
              <label>Cidade</label>
              <input type="text" onChange={(e) => setCity(e.target.value)} />
            </InputText>

            <InputText>
              <label>Estado</label>
              <input type="text" onChange={(e) => setUf(e.target.value)} />
            </InputText>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => handleSubmitLocation()}
              >
                Adicionar
              </Button>
            </DialogActions>
            <CustomizedSnackbars
              message="Preencha os dados para poder adicionar com sucesso!"
              type="info"
              state={state}
            />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
