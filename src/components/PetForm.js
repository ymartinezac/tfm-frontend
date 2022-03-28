import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
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
import PetService from '../services/Pets';
function PetForm({toggleModal}) {
    const ps = new PetService();
    const [isOpen, setIsOpen] = React.useState(true);
    const [species, setSpecies] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [dob, setDOB] = React.useState(null);
    const [kidsChecked, setKidsChecked] = React.useState(false);
    const [petsChecked, setPetsChecked] = React.useState(false);
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

    const handleSubmit = () => {
      let data = {
        "name": name,
        "species": species,
        "gender": gender
      };
      let formData = new FormData();
      formData.append('name', name);
      formData.append('species', species);
      formData.append('gender', gender);
      ps.addPet(data).then((res) => {

          if (res.status === 200) {
            console.log("🚀 success  !!!!");
          }
          }).catch((e) => {
            console.log(e);
            console.log("🚀 ERROR  !!!!");
            
        
    
          });
    };
  
  
    

    return (
        <Modal
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
        >
          <form className="pet-form" encType="multipart/form"> 
            <h2>Add pet</h2>
            <TextField
            required
            id="filled-required"
            label="Name"
            variant="outlined"
            size="small"
            onChange={(newValue) => {
              setName(newValue);
            }}
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
              <p>Compatibility:</p>
              <FormControlLabel control={<Checkbox  />} label="Kids" />
              <FormControlLabel control={<Checkbox />} label="Other pets"  />
            </FormGroup>
            <div className="pet-form__input-group">
              <FormControl required variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-outlined-label" size="small">Species</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={species}
                  onChange={handleSpeciesChange}
                  label="Species"
                  size="small"
                >
                  <MenuItem value={'cat'} size="small">Cat</MenuItem>
                  <MenuItem value={'dog'} size="small">Dog</MenuItem>
                  <MenuItem value={'other'} size="small">Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl  required variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-outlined-label" size="small">Gender</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={gender}
                  onChange={handleGenderChange}
                  label="Gender"
                  size="small"
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
              variant="outlined"
              rows={3}
              size="small"
              onChange={(newValue) => {
                setDescription(newValue);
              }}
            />
            <input
              accept="image/*"
              className="fileimput"
              id="raised-button-file"
              multiple
              type="file"
            />
            <Button onClick={toggleIt}>Cancel</Button>
            <Button onClick={handleSubmit}>Guardar</Button>
          </form>  
        </Modal>
    );
}

export default PetForm;