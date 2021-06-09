import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RouteMap from './RouteMap';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import LiveAuctions from '../pages/LiveAuctions';
import Explore from '../pages/Explore';
import Create from '../pages/Create';
import ConnectWallet from '../pages/ConnectWallet';
import ClaimingNFT from '../pages/ClaimingNFT';
import Profile from '../pages/Profile/ViewProfile';
import EditProfile from '../pages/Profile/EditProfile';
import CommunityUpvote from '../pages/Profile/CommunityUpvote';
import VerifyProfile from '../pages/Profile/VerifyProfile';
import VerifyProfileViaTwitter from '../pages/Profile/VerifyProfile/ViaTwitter';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={RouteMap.home} />} />
      <Route path={RouteMap.home} component={Home} />
      <Route path={RouteMap.notifications} component={Notifications} />
      <Route path={RouteMap.liveAuctions} component={LiveAuctions} />
      <Route path={RouteMap.explore} component={Explore} />
      <Route path={RouteMap.create} component={Create} />
      <Route path={RouteMap.connectWallet} component={ConnectWallet} />
      <Route path={RouteMap.claimingNFT} component={ClaimingNFT} />
      <Route path={RouteMap.profile.verifyProfile.viaTwitter} component={VerifyProfileViaTwitter} />
      <Route path={RouteMap.profile.verifyProfile.index} component={VerifyProfile} />
      <Route path={RouteMap.profile.communityUpvote} component={CommunityUpvote} />
      <Route path={RouteMap.profile.index} component={Profile} />
      <Route path={RouteMap.profile.edit('userId')} component={EditProfile} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;