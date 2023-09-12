import { Router } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Home />
      <Routes>
      {/* <Route path="/" element={< People/>} /> */}
        <Route path="/people/:id" element={< People/>} />
        <Route exact path="/planet/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;