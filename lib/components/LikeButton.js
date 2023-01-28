import { Button } from './Button.js';
export function LikeButton(props) {
  const [meGusta, setMeGusta] = React.useState(false);
  return /*#__PURE__*/React.createElement(Button, {
    onClick: () => setMeGusta(!meGusta),
    className: meGusta ? 'button-blue' : 'button-white'
  }, meGusta ? 'Le diste me gusta!' : 'Dale me gusta');
}