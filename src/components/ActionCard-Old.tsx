import React from 'react';
import styled from 'styled-components';

const CardView = styled.div`
  font-size: ${(p: { size: number }) => p.size * 0.002}em;
  position: relative;
  border: 1px solid;
  width: max-content;
  border-radius: ${(p: { size: number }) => p.size * 0.04}px;
  padding: ${(p: { size: number }) => p.size * 0.04}px;
`;

const CardContent = styled.div`
  position: relative;
  height: ${(p: { size: number }) => p.size}px;
  width: ${(p: { size: number }) => p.size * 0.55}px;
  border: 1px solid;
  background-color: ${p => p.color};
  padding: ${(p: { size: number }) => p.size * 0.04}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardValueTop = styled.div`
  transform: rotate(90deg);
  top: ${(p: { size: number }) => p.size * 0.04}px;
  left: ${(p: { size: number }) => p.size * 0.04}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: ${(p: { size: number }) => p.size * 0.11}px;
  width: ${(p: { size: number }) => p.size * 0.11}px;
  border: 1px solid red;
  border-radius: 50%;
`;

const CardValueBottom = styled.div`
  transform: rotate(90deg);
  bottom: ${(p: { size: number }) => p.size * 0.04}px;
  right: ${(p: { size: number }) => p.size * 0.04}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: ${(p: { size: number }) => p.size * 0.11}px;
  width: ${(p: { size: number }) => p.size * 0.11}px;
  border: 1px solid red;
  border-radius: 50%;
`;

const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: ${(p: { size: number }) => p.size * 0.0025}em;
  border: ${(p: { size: number }) => p.size * 0.011}px solid;
  height: ${(p: { size: number }) => p.size * 0.44}px;
  width: ${(p: { size: number }) => p.size * 0.44}px;
  border-radius: 50%;
`;

const CardDescription = styled.p`
  padding: ${(p: { size: number }) => p.size * 0.04}px;
`;

interface ActionCardProps {
  action: string;
  description: string;
  value: number;
  color: string;
  size: number;
}

export const ActionCard = ({
  color,
  value,
  action,
  description,
  size
}: ActionCardProps) => {
  return (
    <CardView size={size}>
      <CardContent color={color} size={size}>
        <CardValueTop size={size}>{value}M</CardValueTop>
        <CardValueBottom size={size}>{value}M</CardValueBottom>
        <h2>Action Card</h2>
        <CardAction size={size}>
          <h2>{action}</h2>
        </CardAction>
        <CardDescription size={size}>{description}</CardDescription>
      </CardContent>
    </CardView>
  );
};
