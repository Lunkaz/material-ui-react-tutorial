import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
