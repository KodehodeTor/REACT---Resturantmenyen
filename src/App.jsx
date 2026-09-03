import "./App.css";
import { meny } from "./assets/data";
import { MenuItem } from "./components/MenuItem";

function App() {
  return (
    <div className="resturant_app">
      <h1>Vår Meny</h1>
      <div className="meny_list">
        {meny.map(function (item) {
          return (
            <MenuItem
              key={item.id}
              tittel={item.tittel}
              pris={item.pris}
              ingredienser={item.ingredienser}
              kategori={item.kategori}
            />
          );
        })}
        ;
      </div>
    </div>
  );
}

export default App;
