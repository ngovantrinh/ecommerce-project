import * as React from 'react';

import { Box, Grid, Skeleton } from '@material-ui/core';

function MediaLoading() {
  return (
    <>
      <Grid container wrap="nowrap">
        {Array.from(new Array(3)).map((item, index) => (
          <Box key={index} sx={{ width: 310, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
        <Box width={40} height={30} />
      </Grid>
      <Grid container wrap="nowrap">
        {Array.from(new Array(3)).map((item, index) => (
          <Box key={index} sx={{ width: 310, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
        <Box width={40} height={30} />
      </Grid>
      <Grid container wrap="nowrap">
        {Array.from(new Array(3)).map((item, index) => (
          <Box key={index} sx={{ width: 310, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
        <Box width={40} height={30} />
      </Grid>
    </>
  );
}

export default MediaLoading;
