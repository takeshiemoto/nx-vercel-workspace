import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { Notification, FormClose } from 'grommet-icons';
import AppBar from './components/AppBar';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level={'3'} margin={'none'}>
                My App
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction={'row'} flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align={'center'} justify={'center'}>
                app body
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction={'horizontal'} open={showSidebar}>
                  <Box
                    flex
                    width={'medium'}
                    background={'light-2'}
                    elevation={'small'}
                    align={'center'}
                    justify={'center'}
                  >
                    side bar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background={'light-2'}
                    tag={'header'}
                    justify={'end'}
                    align={'center'}
                    direction={'row'}
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background={'light-2'}
                    align={'center'}
                    justify={'center'}
                  >
                    sidebar test
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
