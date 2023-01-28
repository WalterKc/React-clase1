function Article(props) {
  const contenido = props.contenido;
  return /*#__PURE__*/React.createElement("article", {
    className: "article"
  }, /*#__PURE__*/React.createElement("header", {
    className: "article-header"
  }, contenido.titulo), /*#__PURE__*/React.createElement("p", {
    className: "article-body"
  }, contenido.cuerpo));
}

function Articles(props) {
  const cantidadDeArticulos = props.articulos.length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    className: "articles-list"
  }, props.articulos.map(articulo => /*#__PURE__*/React.createElement("li", {
    key: articulo.titulo,
    className: "articles-list-item"
  }, /*#__PURE__*/React.createElement(Article, {
    contenido: articulo
  })))), /*#__PURE__*/React.createElement("div", {
    className: "articles-total"
  }, "Art\xEDculos totales: ", cantidadDeArticulos === 0 ? 'Ninguno' : cantidadDeArticulos));
}

export function Page(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "main-page"
  }, /*#__PURE__*/React.createElement("h1", null, props.titulo), /*#__PURE__*/React.createElement(Articles, {
    articulos: props.articulos
  }));
}