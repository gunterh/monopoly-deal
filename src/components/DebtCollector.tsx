import React from "react";
import styled from "styled-components";
import { ActionCircle } from "./ActionCircle";
import { Card } from "./Card";

const Action = styled.text`
  font-size: 45px;
  font-weight: bold;
`;

interface DebtCollectorProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const DebtCollector = ({ size }: DebtCollectorProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={3} color="#becccd">
      <ActionCircle />
      <Action x="253" y="370" alignmentBaseline="middle" textAnchor="middle">
        DEBT
      </Action>
      <Action x="253" y="420" alignmentBaseline="middle" textAnchor="middle">
        COLLECTOR
      </Action>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Force any player
      </Description>
      <Description
        x="253"
        y="628"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        to pay you 5M.
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
