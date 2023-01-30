import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import DialogCreate from '../Dialogs/DialogCreate/index';
import DialogDelete from '../Dialogs/DialogDelete/index';
import DialogEdit from '../Dialogs/DialogEdit/index';
import {
  Actions,
  Container,
  Location,
  LocationsTableHeader,
  NoLocationsText,
  Table,
} from './styles';

const LocationsTable = () => {
  const [locations, setLocations] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/api/v1/locations/local/${id}`)
      .then((response) => setLocations(response.data));
  }, [id]);

  return (
    <Table>
      {locations.length > 0 ? (
        <>
          <div className="create">
            <DialogCreate type="Local" companyId={id} />
          </div>
          {locations.length > 0 && (
            <Container>
              <LocationsTableHeader>
                <h1>Local</h1>
                <h1>Ações</h1>
              </LocationsTableHeader>

              {locations.map((location) => (
                <Location key={location.id}>
                  <h1>{location.name}</h1>
                  <Actions>
                    <DialogEdit
                      type="Local"
                      localId={location.id}
                      idCompany={location.companyId}
                      locationName={location.name}
                      localCep={location.cep}
                      localStreet={location.street}
                      localNumber={location.number}
                      LocalNeighborhood={location.neighborhood}
                      localCity={location.city}
                      localUf={location.UF}
                    />
                    <DialogDelete
                      type="Local"
                      localId={location.id}
                      locationName={location.name}
                    />
                  </Actions>
                </Location>
              ))}
            </Container>
          )}
        </>
      ) : (
        <>
          <NoLocationsText>
            <NoLocationsText>Nenhum local cadastrado!</NoLocationsText>
            <DialogCreate type="Local" companyId={id} />
          </NoLocationsText>
        </>
      )}
    </Table>
  );
};

export default LocationsTable;
