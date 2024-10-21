import { AppImage } from '@/common/entities';
import { ImgHTMLAttributes } from 'react';

export type NodeImageProps = ImgHTMLAttributes<HTMLImageElement> & AppImage;

const NodeImage: React.FC<NodeImageProps> = (props) => {
  return <img {...props} />;
};

export default NodeImage;
