import "./App.css";
import { meny } from "./assets/data.js";

function MenuItem({ tittel, pris, ingredienser, kategori }) {
  return (
    <div>
      <h2>{tittel}</h2>
      <p>{pris}</p>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
}

export default MenuItem;
