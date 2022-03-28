import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import PetService from '../services/Pets';
import PetForm from './PetForm';

const columns = [
  
  { field: 'name', headerName: 'Name', width: 130, align: 'center' },
  { field: 'species', headerName: 'Species', width: 130, align: 'center' },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 90,
    align: 'center'
  }
]

export default function PetsTable() {
  const ps = new PetService();
  const [pets, setPets] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
      setOpenModal(!openModal);
  }

  React.useEffect(() => {
    ps.getPets().then((res) => { setPets(res.data) })
  }, []);

  return (
    <div className="pets-table" style={{ height: 500, width: '80%' }}>
      <h2>Pets</h2>
      <DataGrid
        rows={pets}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Button variant="contained" onClick={handleOpenModal}  endIcon={<AddIcon />}>
        Add Pet
      </Button>
     
      {openModal &&
                <PetForm toggleModal={handleOpenModal}/>
                }
    </div>
    

  );
}