import { StyleBuilder } from '@/common/entities';

export const defaultNodeStyle = ((css = {}) => ({
  ...css,
})) satisfies StyleBuilder;
