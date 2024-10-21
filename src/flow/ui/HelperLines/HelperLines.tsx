import { useEffect, useRef } from 'react';
import { ReactFlowState, useStore } from '@xyflow/react';
import { canvasStyle } from './HelperLines.style';

const storeSelector = (state: ReactFlowState) => ({
  width: state.width,
  height: state.height,
  transform: state.transform,
});

export type HelperLinesProps = {
  horizontal?: number;
  vertical?: number;
};

const HelperLines: React.FC<HelperLinesProps> = ({
  horizontal,
  vertical,
}: HelperLinesProps) => {
  const { width, height, transform } = useStore(storeSelector);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!context || !canvas) {
      return;
    }

    const dpi = window.devicePixelRatio;
    canvas.width = width * dpi;
    canvas.height = height * dpi;

    context.scale(dpi, dpi);
    context.clearRect(0, 0, width, height);
    context.strokeStyle = '#0041d0';

    if (typeof vertical === 'number') {
      context.moveTo(vertical * transform[2] + transform[0], 0);
      context.lineTo(vertical * transform[2] + transform[0], height);
      context.stroke();
    }

    if (typeof horizontal === 'number') {
      context.moveTo(0, horizontal * transform[2] + transform[1]);
      context.lineTo(width, horizontal * transform[2] + transform[1]);
      context.stroke();
    }
  }, [width, height, transform, horizontal, vertical]);

  return (
    <canvas
      ref={canvasRef}
      className="react-flow__canvas"
      style={canvasStyle}
    />
  );
};

export default HelperLines;
