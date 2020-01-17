import React from "react";
import { Box } from "./Box";
import { Grid } from "./Grid";

export const PlayersPanel = () => {
  return (
    <Grid
      gridTemplateColumns="max-content max-content max-content max-content"
      gridColumnGap="10px"
      p="20px"
    >
      <Box height="100px" width="80px" border="1px solid" />
      <Box height="100px" width="80px" border="1px solid" />
      <Box height="100px" width="80px" border="1px solid" />
      <Box height="100px" width="80px" border="1px solid" />
    </Grid>
  );
};
