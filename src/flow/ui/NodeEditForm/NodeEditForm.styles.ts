import Button from '@/common/ui/Button';
import MenuItem from '@/common/ui/MenuItem';
import { styled } from '@mui/material';

export const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .MuiSelect-select > span {
    display: none;
  }
`;

export const SaveButtonStyled = styled(Button)`
  width: 100%;
`;

export const MenuItemStyled = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClassCodeStyled = styled('span')`
  color: #ccccff88;
`;
