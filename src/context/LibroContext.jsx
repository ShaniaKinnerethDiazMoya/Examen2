import { createContext, useContext } from 'react';
import { useLocalStorage } from '../components/hooks/useLocalStorage';

const LibroContext = createContext();

export function LibroProvider({ children }) {
  const [libros, setLibros] = useLocalStorage('libros', []);

  const agregarLibro = (libro) => {
    setLibros([...libros, { ...libro, id: Date.now(), leido: false }]);
  };

  const editarLibro = (id, libroEditado) => {
    setLibros(libros.map((l) => (l.id === id ? { ...l, ...libroEditado } : l)));
  };

  const eliminarLibro = (id) => {
    setLibros(libros.filter((l) => l.id !== id));
  };

  const toggleLeido = (id) => {
    setLibros(libros.map((l) => (l.id === id ? { ...l, leido: !l.leido } : l)));
  };

  return (
    <LibroContext.Provider
      value={{ libros, agregarLibro, editarLibro, eliminarLibro, toggleLeido }}
    >
      {children}
    </LibroContext.Provider>
  );
}

export function useLibros() {
  return useContext(LibroContext);
}