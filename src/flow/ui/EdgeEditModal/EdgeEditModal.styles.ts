import Button from '@/common/ui/Button';
import Flex from '@/common/ui/Flex';
import { styled } from '@mui/material';

export const FormStyled = styled('form')`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px 16px;
`;

export const SaveButtonStyled = styled(Button)`
  width: 100%;
`;

export const NodeIdRowStyled = styled(Flex)`
  gap: 20px;
`;
