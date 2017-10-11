import React from 'react';
import { Button, Table } from 'react-bootstrap';

const SelectedSpecialtyTable = ({ specialty, removeSelectedSpecialty }) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
      <tr>
        <th>Pareigos pavadinimas</th>
        <th>Veiksmai</th>
      </tr>
      </thead>
      <tbody>
      {specialty ? (
          <tr>
            <td>{specialty.title}</td>
            <td>
              <Button
                bsStyle="danger"
                onClick={removeSelectedSpecialty}
              >
                Pašalinti
              </Button>
            </td>
          </tr>
        ) : (
          <tr>
            <td colSpan={2}>
              Nepasirinkta pareiga
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default SelectedSpecialtyTable;