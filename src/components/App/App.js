import "./App.css";
import estilo from "../../theme/colors";
import UsuarioDesconocido from "./UsuarioDesconocido/UsuarioDesconocido";

const App = ({ nombre, unColor }) => {
  let saludo = <h1 style={estilo}>Hola {nombre}</h1>;

  return nombre ? saludo : <UsuarioDesconocido />;
};
// Agregar las proptypes
export default App;
