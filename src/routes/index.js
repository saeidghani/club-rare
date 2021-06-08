import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RouteMap from './RouteMap';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import LiveAction from '../pages/LiveAction';
import Explore from '../pages/Explore';
import Create from '../pages/Create';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={RouteMap.home} />} />
      <Route path={RouteMap.home} component={Home} />
      <Route path={RouteMap.profile.edit('userId')} component={EditProfile} />
      <Route path={RouteMap.profile.index} component={Profile} />
      <Route path={RouteMap.notifications} component={Notifications} />
      <Route path={RouteMap.liveAuctions} component={LiveAction} />
      <Route path={RouteMap.explore} component={Explore} />
      <Route path={RouteMap.create} component={Create} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
