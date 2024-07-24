import {
  Background as RFBG,
  BackgroundProps as RFBGProps,
} from '@xyflow/react';

export type BackgroundProps = RFBGProps;

const Background: React.FC<BackgroundProps> = (props) => {
  return <RFBG {...props} />;
};

export default Background;
