import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Search from './Search';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Auth} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/search/:id' component={Search} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;