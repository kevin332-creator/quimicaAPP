import { Rect } from 'react-konva';

function Player() {
  return (
    <Rect
      x={window.innerWidth / 2 - 25}
      y={450}
      width={50}
      height={50}
      fill="blue"
      shadowBlur={10}
      cornerRadius={10}
    />
  );
}

export default Player;
