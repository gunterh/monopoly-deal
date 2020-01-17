import React from 'react';
import { Card } from './Card';
import { Box } from './Box';

export const Bank = ({ size }) => (
  <Box position="absolute" right={0}>
    <Card size={size} title="Bank" color="#8080801a" />
  </Box>
);
