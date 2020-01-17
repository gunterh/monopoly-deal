import React from "react";
import styled from "styled-components";
import { ActionCircle } from "./ActionCircle";
import { Card } from "./Card";

const Action = styled.text`
  font-size: 50px;
  font-weight: bold;
`;

interface HotelProps {
  size: number;
}

const Description = styled.text`
  font-size: 22px;
`;

export const Hotel = ({ size }: HotelProps) => {
  return (
    <Card size={size} title="ACTION CARD" value={4} color="#BCD5EC">
      <ActionCircle />
      <Action x="253" y="420" alignmentBaseline="middle" textAnchor="middle">
        HOTEL
      </Action>
      <Description
        x="253"
        y="600"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        Add onto any full
      </Description>
      <Description
        x="253"
        y="628"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        set you own to add
      </Description>
      <Description
        x="253"
        y="656"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        4M to the rent value.
      </Description>
      <Description
        x="253"
        y="684"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        (Except railroads and utilities.)
      </Description>
    </Card>
  );
};
