import React from 'react';
import { DealBreaker } from './DealBreaker';
import { DebtCollector } from './DebtCollector';
import { DoubleTheRent } from './DoubleTheRent';
import { ForceDeal } from './ForceDeal';
import { Hotel } from './Hotel';
import { House } from './House';
import styled from 'styled-components';

const deck = [
  DealBreaker,
  DealBreaker,
  DebtCollector,
  DoubleTheRent,
  ForceDeal,
  Hotel,
  House
];

const CardContainer = styled.div<{ index: number; collapsed: boolean }>`
  position: absolute;
  top: ${p => p.index * 0}px;
  left: ${p => p.index * (p.collapsed ? 10 : 110)}px;
  transition: left 0.3s;
`;

export const Hand = ({ collapsed, handleClick, size }) => {
  return (
    <>
      {deck.map((Card, index) => (
        <CardContainer
          key={index}
          index={index}
          collapsed={collapsed}
          onClick={handleClick}
        >
          <Card size={size} />
        </CardContainer>
      ))}
    </>
  );
};
