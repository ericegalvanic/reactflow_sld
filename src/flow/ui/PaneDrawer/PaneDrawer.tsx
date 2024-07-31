import Drawer, { DrawerProps } from '@/common/ui/Drawer';

export type PaneDrawerProps = Omit<DrawerProps, 'anchor'>;

const PaneDrawer: React.FC<PaneDrawerProps> = ({ ...drawerProps }) => {
  return <Drawer anchor="right" {...drawerProps} />;
};

export default PaneDrawer;
