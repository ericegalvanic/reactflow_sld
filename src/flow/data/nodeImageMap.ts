import { AppImage } from '@/common/entities';
import CircuitBreakers from 'public/circuit_breakers.png';
import ElectricalPanels from 'public/electrical_panels.jpg';
import Fuses from 'public/fuses.png';
import Others from 'public/others.jpg';
import Switches from 'src/assets/switch.png';
import TransferSwitches from 'public/transfer_switches.png';
import Transformer from 'src/assets/transformer.png';
import UPSSystems from 'public/ups_systems.jpg';
import Capacitor from 'src/assets/capacitor.png';
import { NodeClassType } from '../entities';
import { nodeHeightFactor, nodeHeightPx } from '../constants';

const nodeImageWidthPx = 180;
const nodeImageHeightPx = nodeHeightPx;

const squaredHeightFactor = nodeHeightFactor ** 2;

const fallbackNodeImage: AppImage = {
  src: Others,
  alt: 'generic',
  width: nodeImageWidthPx,
  height: nodeImageHeightPx,
};

export const nodeImageMap = {
  CIRCUIT_BREAKER: {
    src: CircuitBreakers,
    alt: 'circuit breakers',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  ELECTRICAL_PANEL: {
    src: ElectricalPanels,
    alt: 'electrical panels',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  FUSE: {
    src: Fuses,
    alt: 'fuses',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  MISC: {
    src: Others,
    alt: 'others',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  SWITCH: {
    src: Switches,
    alt: 'switches',
    width: 60 * nodeHeightFactor,
    height: nodeImageHeightPx,
  },
  TRANSFER_SWITCH: {
    src: TransferSwitches,
    alt: 'transfer switches',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  TRANSFORMER: {
    src: Transformer,
    alt: 'transformer',
    width: 180 * nodeHeightFactor,
    height: nodeImageHeightPx,
  },
  UPS_SYSTEM: {
    src: UPSSystems,
    alt: 'ups systems',
    width: nodeImageWidthPx,
    height: nodeImageHeightPx,
  },
  CAPACITOR: {
    src: Capacitor,
    alt: 'capacitor',
    width: 201 * squaredHeightFactor,
    height: nodeImageHeightPx,
  },
  GENERATOR: fallbackNodeImage,
  GROUND_FAULT_SYSTEM: fallbackNodeImage,
  GROUNDING_OR_BONDING: fallbackNodeImage,
  INSTRUMENT_TRANSFORMER: fallbackNodeImage,
  METER: fallbackNodeImage,
  MOTOR: fallbackNodeImage,
  RELAY: fallbackNodeImage,
} as const satisfies Record<NodeClassType, AppImage>;
