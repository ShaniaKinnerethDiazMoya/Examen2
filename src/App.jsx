import { useState } from 'react';
import { LibroProvider } from './context/LibroContext';
import Formulario from './components/formulario';
import Lista from './components/lista';
import Leidos from './components/leidos';
import Filtros from './components/filtros';
import './index.css';

function App() {
  const [filtro, setFiltro] = useState('');
  const [libroActual, setLibroActual] = useState(null);

  return (
    <LibroProvider>
      <h1>Gestor de Libros</h1>
      <Formulario libroActual={libroActual} setLibroActual={setLibroActual} />
      <Filtros setFiltro={setFiltro} />
      <Lista filtro={filtro} setLibroActual={setLibroActual} />
      <Leidos filtro={filtro} />
    </LibroProvider>
  );
}

export default App;