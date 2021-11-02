import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
      control={
        <Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon/>}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          "aria-label": "secondary checbox"
        }}
      />
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
            endIcon={<SaveIcon />}
            onClick={() => alert('Save')}>
              Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            endIcon={<DeleteIcon />}
            onClick={() => alert('Delete')}
            color="secondary">
              Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
