import { Colorable } from '@/common/entities';
import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  position: relative;
  padding: 16px 48px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const NodeRotatableBaseStyled = styled('div')<
  { rotation: number } & Colorable
>`
  transform: rotate(${(props) => props.rotation}deg);
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};
  border-radius: 8px;
`;

export const NodeRotationHandleStyled = styled('div')<{ rotatable: boolean }>`
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

export const NodeClassCodeWrapperStyled = styled('p')`
  margin: 0;
`;
