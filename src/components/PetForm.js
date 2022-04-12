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
import Dropzone from 'react-dropzone';
import PetService from '../services/Pets';
import GenderSelect from './FormFields/GenderSelect';
import NameTextfield from './FormFields/NameTextfield';
function PetForm({toggleModal, petId, setPetId}) {
    const ps = new PetService();
    const [isOpen, setIsOpen] = React.useState(true);
    const [species, setSpecies] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [dob, setDOB] = React.useState(null);
    const [petPhotoFile, setPetPhotoFile ] = React.useState([]);
    const [petPhotoFilename, setPetPhotoFilename ] = React.useState('');
    const [kidsChecked, setKidsChecked] = React.useState(false);
    const [petsChecked, setPetsChecked] = React.useState(false);

    React.useEffect(() => {
      console.log(petId);
      if(!(petId===null)){
        console.log("🚀 ~ file: PetForm.js ~ line 33 ~ React.useEffect ~ petId", petId);
        ps.getPetById(petId).then((res) => {
          setName(res.data[0].name);
          setDOB(res.data[0].dob);
          setDescription(res.data[0].description);
          setKidsChecked(res.data[0].kids_comp);
          setPetsChecked(res.data[0].pets_comp);
          setGender(res.data[0].gender);
          setSpecies(res.data[0].species);
          console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
          console.log(res);
          console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀');
        });
      }

      return () => {
        setPetId(null);
    };
      
    }, [petId]);

    const reload=()=>window.location.reload();

    const handleSpeciesChange = (event) => {
      setSpecies(event.target.value);
    };

    const handleNameChange = (event) => {     
      setName(event.target.value);
    };

    const handleGenderChange = (event) => {     
      setGender(event.target.value);
    };

    const handleKidsCheckbox = (event) => {
      setKidsChecked(!kidsChecked);
    }

    const handlePetsCheckbox = (event) => {
      setPetsChecked(!petsChecked);
    }

    const toggleIt = () => {
        setIsOpen(!isOpen);
        toggleModal();
        
    }

    const handleSubmit = () => {
      
      let formData = new FormData();
     
      if(!petPhotoFile){
        console.log('no file')
      }
      else {
        formData.append('name', name);
        formData.append('dob', dob);
        formData.append('species', species);
        formData.append('gender', gender);
        formData.append('filename', petPhotoFilename);
        formData.append('kids_comp', kidsChecked);
        formData.append('pets_comp', petsChecked);
        formData.append('description', description);
        formData.append('petPhoto', petPhotoFile);
        console.log("🚀 ~ file: PetForm.js ~ line 55 ~ handleSubmit ~ petPhotoFile", petPhotoFile)
        if(petId===null){
          ps.addPet(formData).then((res) => {
          if (res.status === 200) {
            console.log("🚀 success  !!!!");
          }
          }).catch((e) => {
            console.log(e);
          }).then(reload);
        }
        else{
          ps.putPet(petId, formData).then((res) => {
            if (res.status === 200) {
              console.log("🚀 success  !!!!");
            }
            }).catch((e) => {
              console.log(e);
            }).then(reload);
        }  
      }
      toggleIt();
     
    };
  
  
    

    return (
        <Modal
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            open={isOpen}
        >
          <form className="pet-form" encType="multipart/form-data"> 
            <h2>Add pet</h2>
            <NameTextfield handleNameChange={handleNameChange} name={name} />
            <GenderSelect handleGenderChange={handleGenderChange} gender={gender}/>
            
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={['year', 'month']}
                label="Year and Month"
                minDate={new Date('2000-03-01')}
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
              <FormControlLabel control={<Checkbox onChange={handleKidsCheckbox}/>} label="Kids" />
              <FormControlLabel control={<Checkbox onChange={handlePetsCheckbox}  />} label="Other pets"  />
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
              
            </div>
            <TextField
              required
              id="filled-description"
              multiline
              label="Description"
              variant="outlined"
              rows={3}
              size="small"
              value={description} 
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Dropzone onDrop={acceptedFiles => {
                  console.log(acceptedFiles[0]);
                  setPetPhotoFile(acceptedFiles[0]);
                  setPetPhotoFilename([acceptedFiles[0].name]);
                }
              }
            >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div className="dropzone" {...getRootProps()}>
                  <input {...getInputProps()} type="file" name="petPhoto" id="petPhoto" />
                  
                    <p>Drag and drop some files here, or click to select files</p>
                  
                </div>
              </section>
            )}
          </Dropzone>
            <Button onClick={toggleIt}>Cancel</Button>
            <Button onClick={handleSubmit}>Guardar</Button>
          </form>  
        </Modal>
    );
}

export default PetForm;