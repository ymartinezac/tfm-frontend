import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import PetService from '../services/Pets';
import PetForm from './PetForm';
const moment = require('moment');



export default function PetsTable() {
  const ps = new PetService();
  const reload=()=>window.location.reload();
  const [pets, setPets] = React.useState([]);
  const [modalPetId, setModalPetId] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'last_modified',
      sort: 'desc',
    },
  ]);

  const handleOpenModal = () => {
      setOpenModal(!openModal);
  }

  const handleDelete = (id) => {
    ps.deletePetById(id).then(console.log).then(reload);
    
  }

  const handleEdit = (id) => {
    setModalPetId(id);
    setOpenModal(!openModal);
    
  }

  const handleAddPet = () => {
    setModalPetId(null);
    setOpenModal(!openModal);
    
  }

  React.useEffect(() => {
    ps.getPets().then((res) => { setPets(res.data) })
  }, []);


  const columns = [
    {field: 'filename',
    headerName: '',
  
    renderCell: (params) => {
      if (params.value) {
        return ( <Tooltip title={<img height="150" width="150" src={process.env.REACT_APP_API_URL + params.value} />}><img height="40" width="40" src={process.env.REACT_APP_API_URL + params.value} /></Tooltip>);
      }
      else return null;
  
    },
    width: 90,
    align: 'center',
    disableColumnMenu: true},
    { field: 'name', headerName: 'Name', width: 100, align: 'center' },
    { field: 'dob', headerName: 'Age', renderCell: (params) => {
      if (params.value) {
        return ( <p>{moment(params.value).fromNow(true)}</p>);
      }
      else return null;
  
    },
    width: 90, align: 'center' },
    { field: 'last_modified', hide: true, headerName: 'Name', width: 130, align: 'center' },
    { field: 'species', headerName: 'Species', width: 90, align: 'center' },
    { field: 'kids_comp', headerName: 'Kids', width: 90, align: 'center' },
    { field: 'pets_comp', headerName: 'Other Pets', width: 90, align: 'center' },
    
    {
      field: 'gender',
      headerName: 'Gender',
      width: 90,
      align: 'center'
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 200,
      align: 'left'
    },{
      field: '_id',
      headerName: '',
      width: 100,
      align: 'left', renderCell: (params) => {
      if (params.value) {
        return (<> <IconButton ria-label="delete pet"  onClick={() => handleDelete(params.value)} component="span">
        <DeleteIcon size="small" />
      </IconButton>
     {/* <IconButton ria-label="edit pet"  onClick={() => handleEdit(params.value)} component="span">
      <EditIcon size="small" />
      </IconButton>*/} </>);
      }
      else return null;
      
    }
  }
  ]

  return (
    <div className="pets-table" style={{ height: 520, width: '75%' }}>
      <h2>Pets</h2>
      <DataGrid
        rows={pets}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={6}
        rowsPerPageOptions={[6]}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        
      />

      <Button className="btn-add-pet" variant="contained" onClick={handleAddPet}  endIcon={<AddIcon />}>
        Add Pet
      </Button>
     
      {openModal &&
                <PetForm toggleModal={handleOpenModal} petId={modalPetId} />
      }
    </div>
    

  );
}