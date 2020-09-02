import React from 'react';
import { Box } from 'grommet';
/* eslint-disable-next-line */
export interface AppBarProps {}

export const AppBar = (props: AppBarProps) => {
  return (
    <Box
      tag={'header'}
      direction={'row'}
      align={'center'}
      justify={'between'}
      background={'brand'}
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation={'medium'}
      style={{ zIndex: 1 }}
      {...props}
    />
  );
};

export default AppBar;
