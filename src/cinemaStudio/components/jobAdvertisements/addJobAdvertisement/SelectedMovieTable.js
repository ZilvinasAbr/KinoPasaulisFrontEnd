import React from 'react';
import { Button, Table } from 'react-bootstrap';

const SelectedMovieTable = ({ movie, removeSelectedMovie }) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
      <tr>
        <th>Filmo pavadinimas</th>
        <th>Veiksmai</th>
      </tr>
      </thead>
      <tbody>
      {movie ? (
          <tr>
            <td>{movie.title}</td>
            <td>
              <Button
                bsStyle="danger"
                onClick={removeSelectedMovie}
              >
                Pašalinti
              </Button>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={2}>
              Nepasirinktas filmas
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default SelectedMovieTable;