import { ComponentProps } from '@/common/types';
import { Unstable_Popup as MuiPopup } from '@mui/base';

export type PopupProps = ComponentProps<typeof MuiPopup>;

const Popup: React.FC<PopupProps> = (props) => {
  return <MuiPopup {...props} />;
};

export default Popup;
