import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { NodeContextMenu as NodeContextMenuType } from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';
import { RFNode } from '@/common/entities';
import { AddToQueue } from '@mui/icons-material';
import { isSubNode } from '@/common/utils';

export type PaneContextMenuProps = {
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  onSubNodeCreate?: (parentNode: RFNode) => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & NodeContextMenuType;

const NodeContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeDelete,
  onCreateDownstreamAsset,
  onSubNodeCreate,
  targetNode,
  ...contextMenuProps
}) => {
  const hasParents = isSubNode(targetNode);
  const isParent = !hasParents;

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
      ...(isParent
        ? [
            {
              text: 'Create New Subcomponent',
              icon: <AddToQueue />,
              onClick: () => onSubNodeCreate?.(targetNode),
            },
          ]
        : []),
    ],
    [
      contextMenuProps.id,
      isParent,
      onCreateDownstreamAsset,
      onNodeDelete,
      onSubNodeCreate,
      targetNode,
    ]
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
