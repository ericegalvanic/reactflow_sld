import FlowPane, { FlowPaneProps } from '../../ui/FlowPane';
import { useNodesState, useEdgesState } from '@/flow/hooks';
import { useCallback } from 'react';
import { addEdge } from '@xyflow/react';
import { nodeTypeMap } from '@/flow/entities';
import { initialEdges, initialNodes } from './HomePage.nodes';
import { node } from '@/common/utils';

const HomePage: React.FC = () => {
  const [appNodes, setNodes, onAppNodesChange] = useNodesState(initialNodes);
  const [appEdges, setEdges, onAppEdgesChange] = useEdgesState(initialEdges);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAppEdgesConnect = useCallback(
    ((connection) =>
      setEdges((edges) =>
        addEdge(connection, edges)
      )) satisfies FlowPaneProps['onConnect'],
    []
  );

  const handleContextMenu: FlowPaneProps['onContextMenu'] = (event) => {
    event.preventDefault();
    setNodes((nodes) => [
      ...nodes,
      node({ position: { x: event.clientX, y: event.clientY } }),
    ]);
  };

  return (
    <FlowPane
      nodes={appNodes}
      edges={appEdges}
      onNodesChange={onAppNodesChange}
      onEdgesChange={onAppEdgesChange}
      onConnect={onAppEdgesConnect}
      nodeTypes={nodeTypeMap}
      onContextMenu={handleContextMenu}
    />
  );
};

export default HomePage;
