import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

import CadastroVideo from './pages/cadastro';
import CadastroCategoria from './pages/cadastro/categoria';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const Page404 = () =>(<div>Página 404</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact />
      <Route component={Page404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
