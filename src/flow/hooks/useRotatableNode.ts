import { useEffect, useRef, useState } from 'react';
import { useUpdateNodeInternals } from './useUpdateNodeInternals';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';

export type UseRotatableNodeNamedParams = {
  resizable?: boolean;
  rotatable?: boolean;
};

export const useRotatableNode = (
  nodeId: string,
  namedParams: UseRotatableNodeNamedParams = {
    resizable: true,
    rotatable: true,
  }
) => {
  const rotateControlRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const [rotation, setRotation] = useState(0);
  const [resizable, setResizable] = useState(!!namedParams.resizable);
  const [rotatable, setRotatable] = useState(!!namedParams.rotatable);

  useEffect(() => {
    if (!rotateControlRef.current) {
      return;
    }

    const selection = select(rotateControlRef.current);
    const dragHandler = drag().on('drag', (evt) => {
      const dx = evt.x - 100;
      const dy = evt.y - 100;
      const rad = Math.atan2(dx, dy);
      const deg = rad * (180 / Math.PI);
      setRotation(180 - deg);
      updateNodeInternals(nodeId);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    selection.call(dragHandler as any);
  }, [nodeId, updateNodeInternals]);

  return {
    rotation,
    setRotation,
    resizable,
    setResizable,
    rotatable,
    setRotatable,
    rotateControlRef,
    updateNodeInternals,
  };
};
