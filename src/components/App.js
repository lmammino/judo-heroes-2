import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { AthletePage } from './AthletePage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/athletes';

const renderIndex = () => <IndexPage athletes={athletes} />;
const renderAthlete = ({ match }) => {
  const id = match.params.id;
  const athlete = athletes.filter(current => current.id === id)[0];
  if (!athlete) {
    return <NotFoundPage />;
  }

  return <AthletePage athlete={athlete} athletes={athletes} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/athlete/:id" render={renderAthlete} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
