import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import { authenticate } from './store/session';
import CreateGame from './components/Games/GameListingForm'
import LandingPage from './components/LandingPage'
import EditGame from './components/Games/GameEditForm'
import GameDetails from './components/Games/GameDetail'
import ReviewDetails from './components/Reviews/ReviewDetail'
import UploadPicture from './components/Images/index';
import Images from './components/Images/ImageList';
import SignUp from './components/LandingPage/SignUp'
import Demo from './components/auth/Demo'
import Cart from './components/Carts/Cart'
import Store from './components/MainPage';
import SubNavBar from './components/SubNavBar'
import Library from './components/Library';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutUs from './components/About';
import FTPSlider from './components/MainPage/FTPSlider';
import ActionSlider from './components/MainPage/ActionSlider';
import AdventureSlider from './components/MainPage/AdventureSlider';
import RacingSlider from './components/MainPage/RacingSlider';
import RPGSlider from './components/MainPage/RPGSlider';
import SportsSlider from './components/MainPage/SportsSlider';

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  const Splash = () => {
    return (
      <div className='landingPageWrapper'>
        <LandingPage />
      </div>
    )
  }
  //
  // {user && <SubNavBar />}
  return (
    <>
      <BrowserRouter>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/games" /> : <Splash />}
          </Route>
          <ProtectedRoute exact path="/games" user={user}>
            <SubNavBar />
            <Store />
          </ProtectedRoute>
          <ProtectedRoute exact path="/library">
            <SubNavBar />
            <Library user={user} />
          </ProtectedRoute>
          <ProtectedRoute path="/games/new">
            {/* <SubNavBar /> */}
            <CreateGame user={user} loaded={loaded} />
          </ProtectedRoute>
          <ProtectedRoute path="/games/:gameId/edit">
            <EditGame />
          </ProtectedRoute>
          <ProtectedRoute exact path='/images' user={user}>
            <UploadPicture />
            <Images />
          </ProtectedRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <ProtectedRoute path="/cart">
            <SubNavBar />
            <Cart />
          </ProtectedRoute>
          <Route path="/about">
            <AboutUs />
          </Route>
          {user ?
            <>
              <Switch>
                <Route path='/games/:gameId'>
                  <SubNavBar />
                  <GameDetails user={user} loaded={loaded} />
                </Route>
                <Route path='/reviews/:reviewId'>
                  <ReviewDetails loaded={loaded} />
                </Route>
                <ProtectedRoute path='/users/:userId' exact={true}>
                  <User users={user} />
                </ProtectedRoute>
                <ProtectedRoute path='/freetoplay'>
                <FTPSlider />
                </ProtectedRoute>
                <ProtectedRoute path='/action'>
                  <ActionSlider />
                </ProtectedRoute>
                <ProtectedRoute path='/adventure'>
                  <AdventureSlider />
                </ProtectedRoute>
                <ProtectedRoute path='/racing'>
                  <RacingSlider />
                </ProtectedRoute>
                <ProtectedRoute path='/rpg'>
                  <RPGSlider />
                </ProtectedRoute>
                <ProtectedRoute path='/sports'>
                  <SportsSlider />
                </ProtectedRoute>
      <Route>
        <ErrorPage/>
      </Route>
              </Switch>
            </>
            : <Redirect to="/" />}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
