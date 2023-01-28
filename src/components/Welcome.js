export function Welcome(props) {
  return (
    <body>
      <div>Bienvenido, señor {props.nombre}</div>
      <div>hoy es {props.fecha}</div>
    </body>
  );
}
