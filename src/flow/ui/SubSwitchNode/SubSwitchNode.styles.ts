import { Colorable } from '@/common/entities';
import NodeImage from '@/common/ui/NodeImage';
import { css } from '@/common/utils';
import { nodeHeightPx, subNodeHeightPx } from '@/flow/constants';
import { subNodeArchetype, SubNodeArchetype } from '@/flow/entities';
import { styled } from '@mui/material';

export const NodeCoreStyled = styled('div')`
  position: relative;
  height: ${subNodeHeightPx}px;
  width: ${subNodeHeightPx}px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const NodeImageStyled = styled(NodeImage)<{
  archetype: SubNodeArchetype;
}>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: ${(props) =>
    props.archetype === subNodeArchetype.loadSide
      ? `${subNodeHeightPx}px`
      : '0'};
`;

export const topHandleStyles = css({
  top: -2,
});

export const bottomHandleStyles = css({
  top: 55,
});
