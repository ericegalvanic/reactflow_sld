import { Colorable } from '@/common/entities';
import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  padding: 4px 4px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NodeRotatableBase = styled('div')<
  { rotation: number } & Colorable
>`
  transform: rotate(${(props) => props.rotation}deg);
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};
  border-radius: 8px;
`;
