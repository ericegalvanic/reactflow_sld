import { AppImage } from '@/common/entities';
import CircuitBreakers from 'public/circuit_breakers.png';
import ElectricalPanels from 'public/electrical_panels.jpg';
import Fuses from 'public/fuses.png';
import Others from 'public/others.jpg';
import Switches from 'public/switches.png';
import TransferSwitches from 'public/transfer_switches.png';
import Transformers from 'public/transformers.png';
import UPSSystems from 'public/ups_systems.jpg';
import { NodeClassType, nodeClassType } from '../entities';

const nodeImageWidthPx = 48;
const nodeImageHeightPx = 48;

const fallbackNodeImage: AppImage = {
  src: Others,
  alt: 'generic',
  width: nodeImageWidthPx,
  height: nodeImageHeightPx,
};

export const nodeImageMap = {
  [nodeClassType.circuitBreaker]: {
    src: CircuitBreakers,
    alt: 'circuit breakers',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.electricalPanel]: {
    src: ElectricalPanels,
    alt: 'electrical panels',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.fuse]: {
    src: Fuses,
    alt: 'fuses',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.misc]: {
    src: Others,
    alt: 'others',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.switch]: {
    src: Switches,
    alt: 'switches',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.transferSwitch]: {
    src: TransferSwitches,
    alt: 'transfer switches',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.transformer]: {
    src: Transformers,
    alt: 'transformers',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.upsSystem]: {
    src: UPSSystems,
    alt: 'ups systems',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  [nodeClassType.generator]: fallbackNodeImage,
  [nodeClassType.groundFaultSystem]: fallbackNodeImage,
  [nodeClassType.groundingOrBonding]: fallbackNodeImage,
  [nodeClassType.instrumentTransformer]: fallbackNodeImage,
  [nodeClassType.meter]: fallbackNodeImage,
  [nodeClassType.motor]: fallbackNodeImage,
  [nodeClassType.relay]: fallbackNodeImage,
} as const satisfies Record<NodeClassType, AppImage>;
