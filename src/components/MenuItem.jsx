export function MenuItem({ tittel, pris, ingredienser, kategori }) {
  return (
    <div className="Menu_Container">
      <h2>{tittel}</h2>
      <p>{pris}</p>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
}
