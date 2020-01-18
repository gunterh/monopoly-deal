import React from 'react';
import { Box } from './Box';
import { Grid } from './Grid';

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
          <Box key={index} height="100px" width="80px" border="1px solid">
            {`Player ${index + 1}`}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
