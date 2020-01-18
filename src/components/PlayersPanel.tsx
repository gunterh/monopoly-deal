import React from 'react';
import { Box } from './Box';
import { Grid } from './Grid';
import { Flex } from './Flex';

export const PlayersPanel = () => {
  const players = new Array(6).fill(null);
  return (
    <Box overflowX="hidden" overflowY="hidden" height="100px">
      <Grid
        gridTemplateColumns={`repeat(${players.length}, max-content)`}
        gridColumnGap="10px"
        pb="20px"
        gridAutoFlow="column"
        overflowX="auto"
      >
        {players.map((p, index) => (
          <Flex
            justifyContent="center"
            p="5px"
            key={index}
            height="100px"
            width="80px"
            backgroundColor="#ffffe9"
            borderRadius="5%"
          >
            {`Player ${index + 1}`}
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};
