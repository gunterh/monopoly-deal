import React from 'react';
import { Box } from './Box';
import { Grid } from './Grid';

export const PlayersPanel = () => {
  return (
    <Box overflowX="scroll" overflowY="hidden" height="100px">
      <Grid
        gridTemplateColumns="max-content max-content max-content max-content"
        gridColumnGap="10px"
        pb="20px"
        gridAutoFlow="column"
      >
        <Box height="100px" width="80px" border="1px solid">
          Player 1
        </Box>
        <Box height="100px" width="80px" border="1px solid">
          Player 2
        </Box>
        <Box height="100px" width="80px" border="1px solid">
          Player 3
        </Box>
        <Box height="100px" width="80px" border="1px solid">
          Player 4
        </Box>
        <Box height="100px" width="80px" border="1px solid">
          Player 4
        </Box>
        <Box height="100px" width="80px" border="1px solid">
          Player 4
        </Box>
      </Grid>
    </Box>
  );
};
