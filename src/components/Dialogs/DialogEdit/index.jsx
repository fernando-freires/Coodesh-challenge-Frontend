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

  const [allCompanies, setAllCompanies] = useState({});
  const [companyEdit, setCompanyEdit] = useState({});

  const [companyName, setCompanyName] = useState(props.companyName);

  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [currentLocalName, setCurrentLocalName] = useState(props.locationName);
  const [id, setId] = useState(props.idCompany);

  const [local, setLocal] = useState({});

  const [companyId, setCompanyId] = useState(props.companyId);
  const [localId, setLocalId] = useState(props.localId);
  const [localName, setLocalName] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  // useEffect(() => {
  //   api
  //     .get(`/api/v1/companies`)
  //     .then((response) => setAllCompanies(response.data));
  // }, []);

  // const companyToEdit = async (companyId) => {
  //   const filteredCompany = await allCompanies.filter(
  //     (company) => company.id === companyId
  //   );
  //   setCompanyEdit(filteredCompany);
  //   console.log(companyEdit);

  //   return filteredCompany;
  // };

  const handleClickOpen = async () => {
    //companyToEdit(companyId);
    console.log(companyId);
    console.log(companyEdit);

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
        <DialogTitle>Editar: {companyName}</DialogTitle>
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
              <input type="text" onChange={(e) => setCnpj(e.target.value)} />
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
            <InputText>
              <label>Nome</label>
              <input
                value={local.name}
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
              />
            </InputText>

            <InputText>
              <label>CEP</label>
              <input type="text" onChange={(e) => setCep(e.target.value)} />
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
                Salvar
              </Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
