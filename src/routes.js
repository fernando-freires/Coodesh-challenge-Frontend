import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Login from './pages/Login';
import Users from './pages/Users';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Companies from './pages/Companies';
import Locations from './pages/Locations';
import { Login } from './pages/SignUp/styles';
import { Context } from './context/AuthContext';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={SignIn} />
      <CustomRoute exact isPrivate path="/sign-up" component={SignUp} />
      <CustomRoute exact isPrivate path="/myCompanies" component={Companies} />
      <CustomRoute
        exact
        isPrivate
        path="/locations/:id"
        component={Locations}
      />
      <CustomRoute exact isPrivate path="/login" component={Login} />
      <CustomRoute exact isPrivate path="/users" component={Users} />
    </Switch>
  );
}
