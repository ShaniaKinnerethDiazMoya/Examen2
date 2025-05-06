import { useLibros } from '../context/LibroContext';

export default function Leidos({ filtro }) {
  const { libros, toggleLeido, eliminarLibro } = useLibros();
  const leidos = libros.filter((l) =>
    l.leido && [l.titulo, l.autor, l.genero].some((campo) =>
      campo.toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <div>
      <h2>Libros Leídos</h2>
      {leidos.map((libro) => (
        <div key={libro.id}>
          <span>{libro.titulo} - {libro.autor} ({libro.genero}, {libro.anio})</span>
          <button onClick={() => toggleLeido(libro.id)}>Desmarcar</button>
          <button onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
