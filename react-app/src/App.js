import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import GameList from './components/Games/GameList'
import ReviewList from './components/Reviews/ReviewList'
import GameListingForm from './components/Games/GameListingForm'
import LandingPage from './components/LandingPage'
import GameDetails from './components/Games/GameDetail'
import ReviewDetails from './components/Reviews/ReviewDetail'
import UploadPicture from './components/Images';
import Images from './components/Images/ImageList';
import SingleImage from './components/Images/UserImage';
import GameImages from './components/Games/GameImages';
import UploadGamePicture from './components/Games/GameImageForm';
import SignUpForm from './components/auth/SignUpForm';
import Demo from './components/auth/Demo'
import Cart from './components/Carts/Cart'

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async() => {
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
  return (
    <>
    <BrowserRouter>
    <NavBar user={user} />
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/games" /> : <Splash />}
        </Route>
        <ProtectedRoute exact path="/games" user={user}>
          {/* <NavBar user={user} /> */}
          <GameListingForm />
          <GameList />
          <ReviewList />
        </ProtectedRoute>
        <ProtectedRoute exact path='/images' user={user}>
          <UploadPicture />
          <Images />
        </ProtectedRoute>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        {user ?
        <>
        <Switch>
         <Route path='/games/:gameId'>
          <GameDetails />
          <UploadGamePicture />
          <GameImages />
        </Route>
        <Route path='/reviews/:reviewId'>
          <ReviewDetails />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
          <UploadPicture />
          <SingleImage />
        </ProtectedRoute>
        </Switch>
        </>
        : <Redirect to="/" />}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
