import * as React from 'react';
import Paper from '../Paper';
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../ListItemText';
import Typography from '../Typography';
import Divider from '../Divider';
import { CSS } from '@/common/entities';

export type IconMenuItem = {
  icon: React.ReactNode;
  text: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  command?: string;
  color?: string;
};

export type IconMenuProps = {
  paperStyle?: CSS;
  items?: IconMenuItem[];
  itemsAfterDivider?: IconMenuItem[];
};

const IconMenu: React.FC<IconMenuProps> = ({
  items,
  itemsAfterDivider,
  paperStyle,
}) => {
  return (
    <Paper style={paperStyle} sx={{ width: 240, maxWidth: '100%' }}>
      <MenuList>
        {items?.map((item) => (
          <MenuItem key={item.text} onClick={(event) => item.onClick?.(event)}>
            <ListItemIcon color={item.color}>{item.icon}</ListItemIcon>
            <ListItemText color={item.color}>{item.text}</ListItemText>
            {item.command && (
              <Typography
                variant="body2"
                color={item.color ?? 'text.secondary'}
              >
                {item.command}
              </Typography>
            )}
          </MenuItem>
        ))}
        {itemsAfterDivider && (
          <>
            <Divider />
            {itemsAfterDivider.map((item) => (
              <MenuItem key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
                {item.command && (
                  <Typography variant="body2" color="text.secondary">
                    {item.command}
                  </Typography>
                )}
              </MenuItem>
            ))}
          </>
        )}
      </MenuList>
    </Paper>
  );
};

export default IconMenu;
