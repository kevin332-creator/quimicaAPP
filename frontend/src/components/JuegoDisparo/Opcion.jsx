import { Rect, Text } from 'react-konva';

function Opcion({ x, y, texto, onClick }) {
  return (
    <>
      <Rect
        x={x}
        y={y}
        width={180}
        height={60}
        fill="#ffcc00"
        shadowBlur={10}
        cornerRadius={10}
        onClick={() => onClick(x + 90, texto)}
      />
      <Text
        x={x}
        y={y + 15}
        text={texto}
        width={180}
        align="center"
        fontSize={18}
        fill="black"
        onClick={() => onClick(x + 90, texto)}
      />
    </>
  );
}

export default Opcion;
