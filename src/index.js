import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';

import {BrowserRouter, Match, Miss} from 'react-router';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Connexion} />
        <Match pattern="/pseudo/:pseudo" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
