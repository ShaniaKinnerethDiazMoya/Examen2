export default function Filtros({ setFiltro }) {
    return (
      <input
        type="text"
        placeholder="Buscar por título, autor o género"
        onChange={(e) => setFiltro(e.target.value)}
      />
    );
  }
  