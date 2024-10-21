import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import {
  NodeContextMenu as NodeContextMenuType,
  nodeType,
} from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';
import { RFNode } from '@/common/entities';
import { AddToQueue } from '@mui/icons-material';
import { isSubNode } from '@/flow/utils';

export type PaneContextMenuProps = {
  onNodeDelete?: (nodeId: string) => void;
  onCreateDownstreamAsset?: (upstreamNode: RFNode) => void;
  onLineSideSubNodeCreate?: (parentNode: RFNode) => void;
  onLoadSideSubNodeCreate?: (parentNode: RFNode) => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & NodeContextMenuType;

const NodeContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeDelete,
  onCreateDownstreamAsset,
  onLineSideSubNodeCreate,
  onLoadSideSubNodeCreate,
  targetNode,
  ...contextMenuProps
}) => {
  const hasParents = isSubNode(targetNode);
  const isParent = !hasParents;

  const isElectricalPanel = useMemo(
    () => targetNode.type === nodeType.ElectricalPanelNode,
    [targetNode.type]
  );

  const items = useMemo(
    (): IconMenuProps['items'] => [
      {
        text: 'Delete Asset',
        icon: <DeleteForeverIcon />,
        onClick: () => onNodeDelete?.(contextMenuProps.id),
        color: 'error.main',
      },
      ...(isParent
        ? [
            {
              text: 'Create Downstream Asset',
              icon: <AddIcon />,
              onClick: () => onCreateDownstreamAsset?.(targetNode),
            },
          ]
        : []),
      ...(isParent && isElectricalPanel
        ? [
            {
              text: 'Create New Line-Side Subcomponent',
              icon: <AddToQueue />,
              onClick: () => onLineSideSubNodeCreate?.(targetNode),
            },
          ]
        : []),
      ...(isParent && isElectricalPanel
        ? [
            {
              text: 'Create New Load-Side Subcomponent',
              icon: <AddToQueue />,
              onClick: () => onLoadSideSubNodeCreate?.(targetNode),
            },
          ]
        : []),
    ],
    [
      isParent,
      isElectricalPanel,
      onNodeDelete,
      contextMenuProps.id,
      onCreateDownstreamAsset,
      targetNode,
      onLineSideSubNodeCreate,
      onLoadSideSubNodeCreate,
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
