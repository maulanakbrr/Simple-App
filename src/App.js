import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Loader from './components/Loader/Loader';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader/>}>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/profile' component={ProfilePage}/>
            <Route exact path='/login' component={LoginPage}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
