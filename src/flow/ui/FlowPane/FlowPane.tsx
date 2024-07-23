import { RFEdge, RFNode } from '@/common/entities';
import ReactFlow from '@/common/ui/ReactFlow';

export type FlowPaneProps = {
  nodes?: RFNode[];
  edges?: RFEdge[];
};

const FlowPane: React.FC<FlowPaneProps> = ({ nodes, edges }) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} />
    </div>
  );
};

export default FlowPane;
