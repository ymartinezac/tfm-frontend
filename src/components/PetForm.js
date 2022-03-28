import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from "react";
function PetForm({toggleModal}) {
    const [isOpen, setIsOpen] = React.useState(true);
    const [species, setSpecies] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [dob, setDOB] = React.useState(null);

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

    const toggleIt = () => {
        setIsOpen(!isOpen);
        toggleModal();
    }
    

    return (
        <Modal
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
        >
            <Box className="pet-form">
                <h2>Add pet</h2>
            <TextField
            required
            id="filled-required"
            label="Name"
            variant="standard"
            
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          minDate={new Date('2012-03-01')}
          maxDate={Date.now()}
          value={dob}
          onChange={(newValue) => {
            setDOB(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
    </LocalizationProvider>
    <FormGroup>
        <p>Compatibility: </p>
  <FormControlLabel control={<Checkbox  />} label="Kids" />
  <FormControlLabel control={<Checkbox />} label="Other pets"  />
</FormGroup>

            <div className="pet-form__input-group">
            <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Species</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={species}
          onChange={handleSpeciesChange}
          label="Species"
        >
          
          <MenuItem value={'cat'}>Cat</MenuItem>
          <MenuItem value={'dog'}>Dog</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl  required variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleGenderChange}
          label="Gender"
        >
       
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      </div>

            <TextField
            required
            id="filled-description"
            multiline
            label="Description"
            variant="standard"
            rows={2}
           
            />

<input
  accept="image/*"
  className="fileimput"
 
  id="raised-button-file"
  multiple
  type="file"
/>

                <Button onClick={toggleIt}>Cancel</Button>
            </Box>      
        </Modal>
    );
}

export default PetForm;