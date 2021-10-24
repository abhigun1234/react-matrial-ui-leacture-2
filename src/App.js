import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import {Grid} from '@material-ui/core'
function App() {
  return (
    <div className="App">
     {/* <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button> */}
<Grid item sm={12} container spacing={4}  >
  <Grid item   sm={8} >
    <h1 style={{backgroundColor:'green'}} >item1</h1>
  </Grid>
  <Grid item   sm={4} >
    <h1 style={{backgroundColor:'green'}} >item2</h1>
  </Grid>
  <Grid item   sm={4} >
    <h1 style={{backgroundColor:'green'}} >item3</h1>
  </Grid>
</Grid>
<Grid item sm={12} container spacing={4}  >
  <Grid item   sm={3} >
    <h1 style={{backgroundColor:'green'}} >item1</h1>
  </Grid>
  <Grid item   sm={3}  >
    <h1 style={{backgroundColor:'green'}} >item2</h1>
  </Grid>
  
  
</Grid>
    </div>
  );
}

export default App;
