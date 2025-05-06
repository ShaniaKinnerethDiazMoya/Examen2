import { useLibros } from '../context/LibroContext';

export default function Lista({ filtro, setLibroActual }) {
  const { libros, eliminarLibro, toggleLeido } = useLibros();
  const filtrados = libros.filter((l) =>
    !l.leido && [l.titulo, l.autor, l.genero].some((campo) =>
      campo.toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <div>
      {filtrados.map((libro) => (
        <div key={libro.id}>
          <span>{libro.titulo} - {libro.autor} ({libro.genero}, {libro.anio})</span>
          <button onClick={() => toggleLeido(libro.id)}>Marcar como leído</button>
          <button onClick={() => setLibroActual(libro)}>Editar</button>
          <button onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
