import { FlowSave } from '../entities';
import { assertIsObject } from './assertIsObject';

export function assertIsFlowSave(
  parsedJson: unknown
): asserts parsedJson is FlowSave {
  assertIsObject(parsedJson);

  if (!('nodes' in parsedJson) || !('edges' in parsedJson)) {
    throw new Error('nodes and/or edges property are missing in the save file');
  }

  if (!Array.isArray(parsedJson.nodes) || !Array.isArray(parsedJson.edges)) {
    throw new TypeError('nodes and/or edges are not of an array type');
  }
}
