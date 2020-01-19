import React from 'react';
import { Card } from './Card';
import { ActionCircle } from './ActionCircle';
import styled from 'styled-components';

const Text = styled.text`
  font-size: 100px;
  font-weight: bold;
`;

export const MoneyCard = ({ value, size, color }) => (
  <Card value={value} size={size} title="" color={color}>
    <ActionCircle color={color} />
    <Text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">
      {value} M
    </Text>
  </Card>
);
