import { ComponentProps } from 'react';
import { PopupCoreStyled } from './PopupCore.styles';

export type PopupCoreProps = ComponentProps<typeof PopupCoreStyled>;

const PopupCore = (props: PopupCoreProps) => {
  return <PopupCoreStyled {...props} />;
};

export default PopupCore;
