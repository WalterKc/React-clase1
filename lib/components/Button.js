export function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: 'button ' + props.className || '',
    onClick: props.onClick
  }, props.children);
}