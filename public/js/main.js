import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from "./containers/App";
import HomePage from "./components/HomePage";
import MakeFriends from "./containers/MakeFriends";
import getFriendsInformation from "./middlewares/get-friend-information";
import reducer from "./reducers/index";
import HappinessShare from "./containers/HappinessShare";
import setHappiness from "./middlewares/set-happiness";
import MoodDiaries from "./containers/MoodDiaries";
import Traveller from "./containers/Traveller";
import MooddDiarylists from "./middlewares/get-diaryLists";
const createStoreWithMiddleware = applyMiddleware(getFriendsInformation,setHappiness, MooddDiarylists)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/friends" component={MakeFriends}/>
        <Route path="/happiness" component={HappinessShare}/>
        <Route path='/moodDiary' component={MoodDiaries}/>
        <Route path="/traveller" component={Traveller}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));

export {store}
