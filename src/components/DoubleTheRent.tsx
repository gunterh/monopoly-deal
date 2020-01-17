import React from 'react';
import styled from 'styled-components';
import { ActionCircle } from './ActionCircle';
import { Card } from './Card';

const Action = styled.text`
  font-size: 50px;
  font-weight: bold;
`;

interface DoubleTheRentProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const DoubleTheRent = ({ size }: DoubleTheRentProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={1} color="#ccccbc">
      <ActionCircle />
      <Action x="253" y="370" alignmentBaseline="middle" textAnchor="middle">
        DOUBLE
      </Action>
      <Action x="253" y="420" alignmentBaseline="middle" textAnchor="middle">
        THE RENT!
      </Action>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Needs to be played
      </Description>
      <Description
        x="253"
        y="628"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        with a rent card.
      </Description>
      <Description
        x="253"
        y="656"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Play into center to use.
      </Description>
    </Card>
  );
};
