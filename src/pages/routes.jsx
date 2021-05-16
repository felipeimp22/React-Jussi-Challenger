import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import Purchase from './Purchase'
import PagesRegister from './Register/Register'
import Header from '../components/Header'


const Routes = () => (
  <>
    <Router>

      <StoreProvider>
        <Switch>

          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login} /> */}

          <Route path="/register" component={PagesRegister} />

          <RoutesPrivate exact path="/purchase" component={Purchase} />

        </Switch>
      </StoreProvider>
    </Router>
  </>
)


export default Routes;
