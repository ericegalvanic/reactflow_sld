import { Panel as RFPanel, PanelProps as RFPanelProps } from '@xyflow/react';

export type PanelProps = RFPanelProps;

const Panel: React.FC<PanelProps> = (props) => {
  return <RFPanel {...props} />;
};

export default Panel;
