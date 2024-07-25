import type { Edge } from '@xyflow/react';
import { Optional } from '../types';

export type RFEdge = Edge;

export type CreateRFEDgeDTO = Optional<RFEdge, 'id'>;
