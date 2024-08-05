import { styled } from '@mui/material';

export const OverrideStyled = styled('div')`
  .react-flow__handle.target {
    background-color: ${({ theme }) => theme.palette.green['300']};
  }

  .react-flow__handle.source {
    background-color: ${({ theme }) => theme.palette.red['300']};
  }
`;
