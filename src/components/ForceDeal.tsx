import React from "react";
import styled from "styled-components";
import { ActionCircle } from "./ActionCircle";
import { Card } from "./Card";

const Action = styled.text`
  font-size: 50px;
  font-weight: bold;
`;

interface ForceDealProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const ForceDeal = ({ size }: ForceDealProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={3} color="#BDBFC2">
      <ActionCircle />
      <Action x="253" y="370" alignmentBaseline="middle" textAnchor="middle">
        FORCE
      </Action>
      <Action x="253" y="420" alignmentBaseline="middle" textAnchor="middle">
        DEAL
      </Action>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Swap any property
      </Description>
      <Description
        x="253"
        y="628"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        with another player,
      </Description>
      <Description
        x="253"
        y="656"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        (Cannot be part of a full set.)
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
