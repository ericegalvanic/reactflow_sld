import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  padding: 16px 64px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NodeRotatableBase = styled('div')<{ rotation: number }>`
  transform: rotate(${(props) => props.rotation}deg);
  height: 100%;
  width: 100%;
  border: 2px solid #eee;
  background: #eeeeee55;
  border-radius: 4px;
`;

export const NodeRotationHandle = styled('div')<{ rotatable: boolean }>`
  display: ${(props) => (props.rotatable ? 'block' : 'none')};
  position: absolute;
  width: 10px;
  height: 10px;
  background: #3367d9;
  left: 50%;
  top: -30px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: alias;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 30px;
    background: #3367d9;
    left: 4px;
    top: 5px;
  }
`;
