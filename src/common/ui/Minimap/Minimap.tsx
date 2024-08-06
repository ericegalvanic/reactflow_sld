import {
  MiniMap as RFMiniMap,
  MiniMapProps as RFMiniMapProps,
} from '@xyflow/react';

export type MiniMapProps = RFMiniMapProps;

const Minimap: React.FC<MiniMapProps> = (props) => {
  return <RFMiniMap {...props} />;
};

export default Minimap;
