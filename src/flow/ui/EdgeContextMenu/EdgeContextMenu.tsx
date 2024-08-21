import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { EdgeContextMenu as EdgeContextMenuType } from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';

export type EdgeContextMenuProps = {
  onEdgeDelete?: (edgeId: string) => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & EdgeContextMenuType;

const EdgeContextMenu: React.FC<EdgeContextMenuProps> = ({
  iconMenuProps,
  onEdgeDelete,
  ...contextMenuProps
}) => {
  const items = useMemo(
    (): IconMenuProps['items'] => [
      {
        text: 'Delete Edge',
        icon: <DeleteForeverIcon />,
        onClick: () => onEdgeDelete?.(contextMenuProps.id),
        color: 'error.main',
      },
    ],
    [contextMenuProps, onEdgeDelete]
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

export default EdgeContextMenu;
