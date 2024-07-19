import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TileGrid from "./components/TileGrid";
import Footer from "./components/Footer";
import {Grid} from "@mui/material"
import './assets/css/main.css'

function App() {

  return (    
  <Grid container spacing={5}>
    <Grid item xs={12} marginRight={10} marginLeft={10} marginTop={5}> 
      <Header />
    </Grid>
    <Grid item xs={12} marginRight={10} marginLeft={10}>
      <NavBar />
    </Grid>
    <Grid item xs={2} >
      {/* Side Preview */}
    </Grid>
    <Grid item xs={8}>
      <TileGrid />
    </Grid>
    <Grid item xs={2}>
      {/* Side Preview */}
    </Grid>
    <Grid item xs={12} marginLeft={14}>
      <Footer />
    </Grid>
  </Grid>
  );
}

export default App;
