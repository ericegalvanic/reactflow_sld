import { StyleBuilder } from '@/common/entities';

export const defaultNodeStyle = ((css = {}) => ({
  borderRadius: 4,
  border: '2px solid #eee',
  background: '#eeeeee55',
  ...css,
})) satisfies StyleBuilder;
