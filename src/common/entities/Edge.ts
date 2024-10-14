import type { Edge } from '@xyflow/react';
import { MadeOptional } from '../types';

export type NativeEdge = Edge;

export type RFEdge = Edge;

export type CreateRFEDgeDTO = MadeOptional<RFEdge, 'id'>;
