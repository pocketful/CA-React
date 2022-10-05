import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute';
import Container from './components/UI/Container/Container';
import AddPage from './pages/AddPage';
import NotFoundPage from './pages/ErrorPages/NotFoundPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <PrivateRoute path="/add">
              <AddPage />
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <HomePage />
            </PrivateRoute>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Container>
      </div>
  );
}

export default App;
