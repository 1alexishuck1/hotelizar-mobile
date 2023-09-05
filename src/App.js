import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resultados from './pages/Resultados';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Alojamiento from './pages/Alojamiento';
import Registro1 from './pages/Registro1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/resultados" element={<Resultados/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/registro1" element={<Registro1/>} />
          <Route path="/alojamiento" element={<Alojamiento/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
