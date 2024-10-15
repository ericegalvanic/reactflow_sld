import { AppImage } from '@/common/entities';
import CircuitBreaker from 'src/assets/circuit_breaker.png';
import Fuse from 'src/assets/fuse.png';
import Other from 'src/assets/misc.png';
import Switch from 'src/assets/switch.png';
import TransferSwitch from 'src/assets/transfer_switch.png';
import Transformer from 'src/assets/transformer.png';
import UPSSystem from 'src/assets/ups_system.png';
import Capacitor from 'src/assets/capacitor.png';
import SubSwitch from 'src/assets/sub_switch.png';
import Motor from 'src/assets/motor.png';
import Generator from 'src/assets/generator.png';
import Relay from 'src/assets/relay.png';
import { NodeClassType } from '../entities';
import { nodeHeightFactor, nodeHeightPx } from '../constants';

const fallbackNodeImageWidthPx = 180;
const nodeImageWidthPx = (nominalWidth?: number) =>
  nominalWidth ? nominalWidth * nodeHeightFactor : fallbackNodeImageWidthPx;
const nodeImageHeightPx = nodeHeightPx;

const fallbackNodeImage: AppImage = {
  src: Other,
  alt: 'generic',
  width: nodeImageWidthPx(),
  height: nodeImageHeightPx,
};

export const nodeImageMap = {
  CIRCUIT_BREAKER: {
    src: CircuitBreaker,
    alt: 'circuit breaker',
    width: nodeImageWidthPx(75),
    height: nodeImageHeightPx,
  },
  ELECTRICAL_PANEL: {
    src: Other,
    alt: 'electrical panel',
    width: nodeImageWidthPx(0),
    height: nodeImageHeightPx,
  },
  FUSE: {
    src: Fuse,
    alt: 'fuse',
    width: nodeImageWidthPx(31),
    height: nodeImageHeightPx,
  },
  MISC: {
    src: Other,
    alt: 'other',
    width: nodeImageWidthPx(116),
    height: nodeImageHeightPx,
  },
  SWITCH: {
    src: Switch,
    alt: 'switch',
    width: nodeImageWidthPx(77),
    height: nodeImageHeightPx,
  },
  TRANSFER_SWITCH: {
    src: TransferSwitch,
    alt: 'transfer switch',
    width: nodeImageWidthPx(130),
    height: nodeImageHeightPx,
  },
  TRANSFORMER: {
    src: Transformer,
    alt: 'transformer',
    width: nodeImageWidthPx(180),
    height: nodeImageHeightPx,
  },
  UPS_SYSTEM: {
    src: UPSSystem,
    alt: 'ups system',
    width: nodeImageWidthPx(151),
    height: nodeImageHeightPx,
  },
  CAPACITOR: {
    src: Capacitor,
    alt: 'capacitor',
    width: nodeImageWidthPx(74),
    height: nodeImageHeightPx,
  },
  SUB_SWITCH: {
    src: SubSwitch,
    alt: 'switch',
    width: nodeImageWidthPx(54),
    height: nodeImageHeightPx,
  },
  MOTOR: {
    src: Motor,
    alt: 'motor',
    width: nodeImageWidthPx(151),
    height: nodeImageHeightPx,
  },
  GENERATOR: {
    src: Generator,
    alt: 'generator',
    width: nodeImageWidthPx(151),
    height: nodeImageHeightPx,
  },
  RELAY: {
    src: Relay,
    alt: 'relay',
    width: nodeImageWidthPx(151),
    height: nodeImageHeightPx,
  },
  GROUND_FAULT_SYSTEM: fallbackNodeImage,
  GROUNDING_OR_BONDING: fallbackNodeImage,
  INSTRUMENT_TRANSFORMER: fallbackNodeImage,
  METER: fallbackNodeImage,
} as const satisfies Record<NodeClassType, AppImage>;
