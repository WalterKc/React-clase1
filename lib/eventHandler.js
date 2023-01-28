const nombre = 'Julián';
const elemento = /*#__PURE__*/React.createElement("button", {
  onClick: event => alert(`Hiciste click en el botón con texto "${event.target.innerText}"`)
}, "Hac\xE9 click");
const app = document.getElementById('react-app');
ReactDOM.render(elemento, app);