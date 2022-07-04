import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Container from './components/UI/Container/Container';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
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
            <Route path="/add">
              <AddPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Container>
      </div>
  );
}

export default App;
