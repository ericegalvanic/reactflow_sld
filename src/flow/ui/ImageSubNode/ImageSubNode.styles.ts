import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  position: relative;
  padding: 4px 4px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NodeRotatableBaseStyled = styled('div')<{ rotation: number }>`
  transform: rotate(${(props) => props.rotation}deg);
  height: 100%;
  width: 100%;
  border: 2px solid #ccc;
  background: #ededed;
  border-radius: 8px;
`;

export const NodeClassCodeWrapperStyled = styled('p')`
  margin: 0;
  position: absolute;
  left: 4px;
  bottom: 2px;
`;
