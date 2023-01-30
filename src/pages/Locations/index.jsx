import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import HeaderComponent from '../../components/Header';
import LocationsTable from '../../components/LocationsTable';
import history from '../../history';
import { Container, WithLocations } from './styles';

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
      <WithLocations>
        <LocationsTable />
      </WithLocations>
    </Container>
  );
};

export default Locations;
