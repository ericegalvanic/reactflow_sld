import { Brand } from '../types';
import { NodeComponentProps } from './NodeComponentProps';

export type NodeFC<P = {}> = React.FC<NodeComponentProps & P>;

export interface IsNodeComponent<P = {}>
  extends Brand<NodeFC<P>, 'NodeComponent'> {}

export const createNodeComponent = <P = {}>(component: React.FC<P>) =>
  component as unknown as IsNodeComponent<P>;
