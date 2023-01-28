import { Button } from './Button.js';

function ToDoInput(props) {
  const [value, setValue] = React.useState('');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: event => setValue(event.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      props.onAddInput(value);
      setValue('');
    }
  }, "Add to list!"));
}

export function ToDoList(props) {
  const [items, setItems] = React.useState([]);

  const removeFromItems = indexToRemove => setItems(items.filter((_, index) => index !== indexToRemove));

  return /*#__PURE__*/React.createElement("div", {
    className: "main-page"
  }, /*#__PURE__*/React.createElement(ToDoInput, {
    onAddInput: newItem => setItems([...items, newItem])
  }), /*#__PURE__*/React.createElement("ul", null, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, item, " ", /*#__PURE__*/React.createElement(Button, {
    onClick: () => removeFromItems(i)
  }, "X")))));
}