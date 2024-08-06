import AddIcon from '@mui/icons-material/Add';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { PaneContextMenu as PaneContextMenuType } from '@/flow/entities';
import { useMemo } from 'react';
import { contextMenuZIndex } from '@/flow/constants';

export type PaneContextMenuProps = {
  onNodeCreate?: () => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & PaneContextMenuType;

const PaneContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeCreate,
  ...contextMenuProps
}) => {
  const items = useMemo(
    (): IconMenuProps['items'] => [
      {
        text: 'Create Asset',
        icon: <AddIcon />,
        onClick: onNodeCreate,
      },
    ],
    [onNodeCreate]
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

export default PaneContextMenu;
