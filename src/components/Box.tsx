import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  position,
  PositionProps,
  border,
  BorderProps,
  overflow,
  OverflowProps,
  gridArea,
  GridAreaProps,
  shadow,
  ShadowProps
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BorderProps,
    OverflowProps,
    GridAreaProps,
    ShadowProps {}

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox,
  position,
  border,
  overflow,
  gridArea,
  shadow
);
