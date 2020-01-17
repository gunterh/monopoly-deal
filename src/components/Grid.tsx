import styled from 'styled-components';
import { Box, BoxProps } from './Box';
import { grid, GridProps } from 'styled-system';

export interface Props extends BoxProps, GridProps {}

export const Grid = styled(Box)<Props>(
  {
    display: 'grid'
  },
  grid
);
