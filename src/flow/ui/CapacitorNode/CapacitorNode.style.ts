import { Colorable } from '@/common/entities';
import NodeImage from '@/common/ui/NodeImage';
import { nodeHeightPx } from '@/flow/constants';
import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Inter';
`;

export const NodeRotatableBaseStyled = styled('div')<
  { rotation: number } & Colorable
>`
  transform: rotate(${(props) => props.rotation}deg);
  height: ${nodeHeightPx}px;
  flex-shrink: 1;
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

export const NodeImageStyled = styled(NodeImage)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const NodeTextDataStyled = styled('div')`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
`;

export const NodeLabelStyled = styled('p')`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2423;
  margin: 0;
`;

export const NodeClassCodeStyled = styled('p')`
  font-style: italic;
  font-size: 6px;
  line-height: 1.1667;
  margin: 0;
`;
