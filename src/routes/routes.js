import React from 'react';

import {Route} from 'react-router-dom';
import HomePage from '../pages/home/HomePage'
import App from '../App'

export default(
    <div>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/app' component={ HomePage }/>
        <Route path='/login' component={ HomePage }/>
        <Route path='/new-event' component={ HomePage }/>
    </div>
);