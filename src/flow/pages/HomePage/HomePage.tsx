import { RFEdge, RFNode } from '@/common/entities';
import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import { useNodesState, useEdgesState } from '@/flow/hooks';
import { useCallback } from 'react';
import { addEdge } from '@xyflow/react';

const initialNodes: RFNode[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: 'Node 2' },
    style: { background: 'magenta' },
  },
];

const initialEdges: RFEdge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const HomePage: React.FC = () => {
  const [appNodes, , onAppNodesChange] = useNodesState(initialNodes);
  const [appEdges, setEdges, onAppEdgesChange] = useEdgesState(initialEdges);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAppEdgesConnect = useCallback(
    ((connection) =>
      setEdges((edges) =>
        addEdge(connection, edges)
      )) satisfies FlowPaneProps['onConnect'],
    []
  );

  return (
    <FlowPane
      nodes={appNodes}
      edges={appEdges}
      onNodesChange={onAppNodesChange}
      onEdgesChange={onAppEdgesChange}
      onConnect={onAppEdgesConnect}
    />
  );
};

export default HomePage;
