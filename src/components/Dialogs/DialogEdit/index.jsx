import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import Edit from '../../../assets/imgs/Edit.png';
import { InputText } from './styles';

export default function DialogEdit(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(props.type);

  const [companyName, setCompanyName] = useState(props.companyName);

  const [name, setName] = useState(props.companyName);
  const [website, setWebsite] = useState(props.companyWebsite);
  const [cnpj, setCnpj] = useState(props.companyCnpj);
  const [local, setLocal] = useState({});

  const [companyId, setCompanyId] = useState(props.companyId);
  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState(props.locationName);
  const [cep, setCep] = useState(props.localCep);
  const [street, setStreet] = useState(props.localStreet);
  const [number, setNumber] = useState(props.localNumber);
  const [neighborhood, setNeighborhood] = useState(props.LocalNeighborhood);
  const [city, setCity] = useState(props.localCity);
  const [uf, setUf] = useState(props.localUf);

  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postData = {
    name,
    website,
    cnpj,
  };

  const LocationData = {
    name: localName,
    cep,
    street,
    number,
    neighborhood,
    city,
    UF: uf,
  };

  const handleSubmitCompany = async () => {
    await api.put(`/api/v1/companies/${companyId}`, postData);
    document.location.reload(true);
  };

  const handleSubmitLocation = async () => {
    await api.put(`/api/v1/locations/${localId}`, LocationData);
    document.location.reload(true);
  };

  return (
    <div>
      <img src={Edit} alt="" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        {type === 'Empresa' && (
          <DialogContent>
            <DialogTitle>
              Editar: <b>{name}</b>
            </DialogTitle>
            <InputText>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputText>

            <InputText>
              <label>Website</label>
              <input
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
              />
            </InputText>

            <InputText>
              <label>CNPJ</label>
              <input
                type="text"
                onChange={(e) => setCnpj(e.target.value)}
                value={cnpj}
              />
            </InputText>
            <DialogActions>
              <Button variant="contained" onClick={() => handleSubmitCompany()}>
                Editar
              </Button>
            </DialogActions>
          </DialogContent>
        )}

        {type === 'Local' && (
          <DialogContent>
            <DialogTitle>
              Editar: <b>{localName}</b>
            </DialogTitle>
            <InputText>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
                value={localName}
              />
            </InputText>

            <InputText>
              <label>CEP</label>
              <input
                type="text"
                onChange={(e) => setCep(e.target.value)}
                value={cep}
              />
            </InputText>

            <InputText>
              <label>Rua</label>
              <input
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </InputText>

            <InputText>
              <label>Número</label>
              <input
                type="text"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </InputText>

            <InputText>
              <label>Bairro</label>
              <input
                type="text"
                onChange={(e) => setNeighborhood(e.target.value)}
                value={neighborhood}
              />
            </InputText>

            <InputText>
              <label>Cidade</label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </InputText>

            <InputText>
              <label>Estado</label>
              <input
                type="text"
                onChange={(e) => setUf(e.target.value)}
                value={uf}
              />
            </InputText>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => handleSubmitLocation()}
              >
                Salvar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
