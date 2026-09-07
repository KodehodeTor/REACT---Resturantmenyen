export function MenuItem({ tittel, pris, ingredienser, kategori }) {
  return (
    <div className="menu_container">
      <h2 className="tittel">{tittel}</h2>
      <p className="pris">{pris}</p>
      <p className="ingredienser">{ingredienser}</p>
      <p className="kategori">{kategori}</p>
    </div>
  );
}
