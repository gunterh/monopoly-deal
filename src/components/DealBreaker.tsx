import React from "react";
import styled from "styled-components";
import { ActionCircle } from "./ActionCircle";
import { Card } from "./Card";

const Action = styled.text`
  font-size: 50px;
  font-weight: bold;
`;

interface DealBreakerProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const DealBreaker = ({ size }: DealBreakerProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={5} color="#908dc2">
      <ActionCircle />
      <Action x="253" y="370" alignmentBaseline="middle" textAnchor="middle">
        DEAL
      </Action>
      <Action x="253" y="420" alignmentBaseline="middle" textAnchor="middle">
        BREAKER
      </Action>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Steal a complete set of
      </Description>
      <Description
        x="253"
        y="628"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        properties from any player,
      </Description>
      <Description
        x="253"
        y="656"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        (Including any buildings.)
      </Description>
      <Description
        x="253"
        y="684"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Play into center to use.
      </Description>
    </Card>
  );
};
