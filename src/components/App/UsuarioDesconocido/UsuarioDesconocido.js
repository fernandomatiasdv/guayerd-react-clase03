import estilos from "./usuarioDesconocido.module.css";

const UsuarioDesconocido = () => {
  const { usuarioD } = estilos;
  return <h1 className={usuarioD}>Usuario desconocido</h1>;
};

export default UsuarioDesconocido;
