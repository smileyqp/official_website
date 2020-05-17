import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
