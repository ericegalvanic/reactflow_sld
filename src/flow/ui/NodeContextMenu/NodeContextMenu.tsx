import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { NodeContextMenu as NodeContextMenuType } from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';
import { RFNode } from '@/common/entities';

export type PaneContextMenuProps = {
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & NodeContextMenuType;

const NodeContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeDelete,
  onCreateDownstreamAsset,
  targetNode,
  ...contextMenuProps
}) => {
  const items = useMemo(
    (): IconMenuProps['items'] => [
      {
        text: 'Delete Asset',
        icon: <DeleteForeverIcon />,
        onClick: () => onNodeDelete?.(contextMenuProps.id),
        color: 'error.main',
      },
      {
        text: 'Create Downstream Asset',
        icon: <AddIcon />,
        onClick: () => onCreateDownstreamAsset?.(targetNode),
      },
    ],
    [contextMenuProps.id, onCreateDownstreamAsset, onNodeDelete, targetNode]
  );

  return (
    <IconMenu
      paperStyle={{
        position: 'absolute',
        zIndex: contextMenuZIndex,
        top: contextMenuProps.top,
        left: contextMenuProps.left,
        bottom: contextMenuProps.bottom,
        right: contextMenuProps.right,
        width: 'fit-content',
      }}
      items={items}
      {...iconMenuProps}
    />
  );
};

export default NodeContextMenu;
