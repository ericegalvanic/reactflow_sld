import {
  defaultSubnodeHeightPx,
  defaultSubnodeWidthPx,
} from '@/flow/constants';
import { Position, RFNode } from '../../common/entities';
import { safeNumber } from '../../common/utils/safeNumber';

const noOffsetPx = 0;

const defaultSubnodeWidthAccountingThresholdPx = defaultSubnodeWidthPx * 2;
const defaultSubnodeHeightAccountingThresholdPx = defaultSubnodeHeightPx * 2;

const abscissaFixedOffsetPx = 0;
const abscissaOffsetAdditionThresholdPx = abscissaFixedOffsetPx * 2;

const ordinateFixedOffsetPx = 48;
const ordinateOffsetAdditionThresholdPx = ordinateFixedOffsetPx * 3;

export const parentNodeCenter = (parentNode: RFNode): Position => {
  const parentWidthPx = safeNumber(parentNode.width);
  const parentHeightPx = safeNumber(parentNode.height);

  const widthAbscissaOffsetPx =
    parentWidthPx >= defaultSubnodeWidthAccountingThresholdPx
      ? defaultSubnodeWidthPx / 2
      : noOffsetPx;

  const heightOrdinateOffsetPx =
    parentHeightPx >= defaultSubnodeHeightAccountingThresholdPx
      ? defaultSubnodeHeightPx / 2
      : noOffsetPx;

  const actualAbscissaOffsetPx =
    parentWidthPx >= abscissaOffsetAdditionThresholdPx
      ? abscissaFixedOffsetPx
      : noOffsetPx;

  const actualOrdinateOffsetPx =
    parentHeightPx >= ordinateOffsetAdditionThresholdPx
      ? ordinateFixedOffsetPx
      : noOffsetPx;

  return {
    x: parentWidthPx / 2 - widthAbscissaOffsetPx + actualAbscissaOffsetPx,
    y: parentHeightPx / 2 - heightOrdinateOffsetPx + actualOrdinateOffsetPx,
  };
};
