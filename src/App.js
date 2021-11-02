import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

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
        <ButtonStyled />
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="The time"
          placeholder="test@test.com"
        />
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
