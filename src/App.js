import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Catalog from './Pages/Catalog/Catalog/Catalog';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/catalog">
            <Catalog></Catalog>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
