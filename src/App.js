import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  ////provides access of Router to all its components inside

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      {/* <Route path="/"  render={(props)=>(
        <>
          <Banner {...props}/>
          <Movies {...props}/>
        </>
      )}/>   */}
      <Route path="/" element={<><Banner /><Movies /></>}/>
      <Route path="/favourites" element={<Favourite />}/>  
      {/* <Banner />
      <Movies /> */}
      {/* <Favourite /> */}
      </Routes>
    </Router>
  );
}

export default App;
