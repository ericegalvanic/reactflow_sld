import { ObjectValues } from '@/common/types';
import { nodeTypeNodeClassMap } from './nodeTypeNodeClassMap';

export type ImplicitNodeClass = ObjectValues<typeof nodeTypeNodeClassMap>;
