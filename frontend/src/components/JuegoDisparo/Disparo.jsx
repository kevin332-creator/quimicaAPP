import { Rect } from 'react-konva';

function Disparo({ x, y }) {
  return (
    <Rect x={x} y={y} width={5} height={20} fill="red" />
  );
}

export default Disparo;
