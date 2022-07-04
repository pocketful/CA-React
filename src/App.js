import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Container from './components/UI/Container/Container';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import AuthContext from './store/authContext';

function App() {
  const [userEmail, setUserEmail] = useState('');

  function login(email) {
    console.log('logged in');
    setUserEmail(email);
  }

  function logout() {
    console.log('logout');
    setUserEmail(null);
  }

  const ctx = {
    login,
    logout,
    userEmail,
  };

  return (
    <AuthContext.Provider value={ctx}>
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
    </AuthContext.Provider>
  );
}

export default App;
