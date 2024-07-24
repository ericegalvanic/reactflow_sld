import Background from '@/common/ui/Background';
import Minimap from '@/common/ui/Minimap';
import ReactFlow, { ReactFlowProps } from '@/common/ui/ReactFlow';

export type FlowPaneProps = ReactFlowProps;

const FlowPane: React.FC<FlowPaneProps> = ({ ...rfProps }) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow {...rfProps}>
        <Background />
        <Minimap />
      </ReactFlow>
    </div>
  );
};

export default FlowPane;
