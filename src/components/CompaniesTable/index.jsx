import React, { useEffect, useState } from 'react';
import api from '../../api';
import DialogCreate from '../Dialogs/DialogCreate';
import DialogEdit from '../Dialogs/DialogEdit/';
import DialogDelete from '../Dialogs/DialogDelete/';
import Locations from '../../assets/imgs/Locations.png';
import history from '../../history';
import {
  Actions,
  CompaniesTableHeader,
  Company,
  Container,
  NoCompanies,
  NoCompaniesText,
  Table,
} from './styles';

const CompaniesTable = (props) => {
  const [companies, setCompanies] = useState([]);
  const [qtdLocations, setQtdLocations] = useState([]);
  const [userId, setUserId] = useState(props.userId);

  const [id, setId] = useState();

  useEffect(() => {
    api
      .get(`/api/v1/companies/company/${userId}`)
      .then((response) => setCompanies(response.data));

    api
      .get(`/api/v1/locations`)
      .then((response) => setQtdLocations(response.data));
  }, [userId]);

  const QtdLocations = (companyId) => {
    const filteredQtd = qtdLocations.filter(
      (location) => location.companyId === companyId
    );

    return filteredQtd.length;
  };
  return (
    <Table>
      {companies.length > 0 ? (
        <>
          <div className="create">
            <DialogCreate type="Empresa" userId={userId} />
          </div>
          {companies.length > 0 && (
            <Container>
              <CompaniesTableHeader>
                <h1>Empresas</h1>
                <h1>Qt de Locais</h1>
                <h1>Ações</h1>
              </CompaniesTableHeader>

              {companies.map((company) => (
                <Company key={company.id}>
                  <h1>{company.name}</h1>
                  <h1 id="qtd">{QtdLocations(company.id)}</h1>
                  <Actions>
                    <DialogEdit
                      type="Empresa"
                      companyId={company.id}
                      companyName={company.name}
                      companyWebsite={company.website}
                      companyCnpj={company.cnpj}
                    />
                    <img
                      src={Locations}
                      alt=""
                      onClick={() => history.push(`/locations/${company.id}`)}
                    />
                    <DialogDelete
                      type="Empresa"
                      companyId={company.id}
                      companyName={company.name}
                    />
                  </Actions>
                </Company>
              ))}
            </Container>
          )}
        </>
      ) : (
        <>
          <NoCompanies>
            <NoCompaniesText>Nenhuma empresa cadastrada!</NoCompaniesText>
            <DialogCreate type="Empresa" userId={userId} />
          </NoCompanies>
        </>
      )}
    </Table>
  );
};

export default CompaniesTable;
