import Drawer, { DrawerProps } from '@/common/ui/Drawer';
import { ContentStyled } from './PaneDrawer.styles';

export type PaneDrawerProps = Omit<DrawerProps, 'anchor'>;

const PaneDrawer: React.FC<PaneDrawerProps> = ({
  children,
  ...drawerProps
}) => {
  return (
    <Drawer anchor="right" {...drawerProps}>
      <ContentStyled>{children}</ContentStyled>
    </Drawer>
  );
};

export default PaneDrawer;
