import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { NodeContextMenu as NodeContextMenuType } from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';

export type PaneContextMenuProps = {
  onNodeDelete?: (nodeId: string) => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & NodeContextMenuType;

const NodeContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeDelete,
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
    ],
    [contextMenuProps, onNodeDelete]
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
      }}
      items={items}
      {...iconMenuProps}
    />
  );
};

export default NodeContextMenu;
