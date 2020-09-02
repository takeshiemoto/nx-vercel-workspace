import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Grommet, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
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
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level={'3'} margin={'none'}>
          My App
        </Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2">Page 2</Link>
        </li>
      </ul>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </Grommet>
  );
};

export default App;
