import AddIcon from '@mui/icons-material/Add';
import IconMenu, { IconMenuProps } from '@/common/ui/IconMenu';
import { PaneContextMenu } from '@/flow/entities';
import { useMemo } from 'react';

export type PaneContextMenuProps = {
  onNodeCreate?: () => void;
  iconMenuProps?: Omit<IconMenuProps, 'items' | 'itemsAfterDivider'>;
} & PaneContextMenu;

const PaneContextMenu: React.FC<PaneContextMenuProps> = ({
  iconMenuProps,
  onNodeCreate,
  ...contextMenuProps
}) => {
  const items: IconMenuProps['items'] = useMemo(
    () => [
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
        zIndex: 2000,
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
