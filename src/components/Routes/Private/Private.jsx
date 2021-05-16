import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../Store/Context';
import Home from '../../../pages/Home/Home'
const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { token, email } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() => (token, email)
        ? <Component {...rest} />
        : <Redirect to="/" />
        // : <Redirect to="/login" />
      }
    />
  )
}

export default RoutesPrivate;
