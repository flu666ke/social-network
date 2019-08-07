import React from 'react';
import './style.scss';

import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';



const App = (props) => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/login"
          render={() => <LoginPage />} />

        {/* <Route path="/news" component={Profile} />
          <Route path="/music" component={Profile} />
          <Route path="/settings" component={Profile} /> */}

      </div>
    </div>

  );
}

export default App;
