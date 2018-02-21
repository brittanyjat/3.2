import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Components/App';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Search from './Components/Search';

export default (
    <Switch>
        <Route path='/auth' component={App} />
        <Route path='/dashboard#/' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/search/:id' component={Search} />
    </Switch>
)