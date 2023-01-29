import React, { useContext } from 'react';
import HeaderComponent from '../../components/Header/index';
import CompaniesTable from '../../components/CompaniesTable';
import { Context } from '../../context/AuthContext';
import { Container, NoCompanies, NoCompaniesText } from './styles';
import DialogCreate from '../../components/Dialogs/DialogCreate';

const Companies = () => {
  const { userId } = useContext(Context);
  return (
    <>
      <Container>
        <HeaderComponent pageName="Minhas Empresas" />
        <NoCompanies>
          <CompaniesTable userId={userId} />
        </NoCompanies>
      </Container>
    </>
  );
};

export default Companies;
