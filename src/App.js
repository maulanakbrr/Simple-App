import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/profile' component={ProfilePage}/>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
