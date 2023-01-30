import React, { useContext } from 'react';
import CompaniesTable from '../../components/CompaniesTable';
import HeaderComponent from '../../components/Header/index';
import { Context } from '../../context/AuthContext';
import { Container, NoCompanies } from './styles';
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
