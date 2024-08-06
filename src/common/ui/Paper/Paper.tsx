import { Paper as MUIPaper, PaperProps as MUIPaperProps } from '@mui/material';

export type PaperProps = MUIPaperProps;

const Paper: React.FC<PaperProps> = (props) => {
  return <MUIPaper {...props} />;
};

export default Paper;
