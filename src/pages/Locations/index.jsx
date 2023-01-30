import React, { useContext } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import HeaderComponent from '../../components/Header';
import LocationsTable from '../../components/LocationsTable';
import { Context } from '../../context/AuthContext';
import history from '../../history';
import { Container, NoLocations } from './styles';

const Locations = () => {
  const handleClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <HeaderComponent pageName="Meus locais" />
      <div className="head">
        <p onClick={handleClick}>
          <IoMdArrowBack />
          Minhas Empresas
        </p>
      </div>
      <NoLocations>
        <LocationsTable />
      </NoLocations>
    </Container>
  );
};

export default Locations;
