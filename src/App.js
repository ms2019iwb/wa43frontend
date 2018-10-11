import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Mypage from './containers/Mypage/Mypage';
import Sns from './containers/Sns/Sns';
import SnsDetail from './containers/Sns/SnsDetail';
import SnsNew from './containers/Sns/SnsNew';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      {/* <Route exact path="/" component={Sns} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/mypage" component={Mypage} />
      <Route exact path="/sns" component={Sns} />
      <Route exact path="/sns/detail" component={SnsDetail} />
      <Route exact path="/sns/new" component={SnsNew} />
    </React.Fragment>
  </Router>
);

export default App;