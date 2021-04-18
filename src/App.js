// eslint-disable-next-line

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <main className='main'>
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export { App };