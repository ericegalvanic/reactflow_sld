import { ReactNode } from 'react';
import { OverrideStyled } from './styled';

export type OverrideStylesProps = { children: ReactNode };

const OverrideStyles: React.FC<OverrideStylesProps> = ({ children }) => {
  return <OverrideStyled>{children}</OverrideStyled>;
};

export default OverrideStyles;
