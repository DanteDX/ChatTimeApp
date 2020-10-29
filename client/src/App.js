import React from "react";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UserNameForm from "./components/UserNameForm";
import ChatRoomSelection from "./components/ChatRoomSelection";
//rooms
import Physics from './components/rooms/Physics';
import English from './components/rooms/English';
import Gaming from './components/rooms/Gaming';

function App() {
  return (
    <BrowserRouter>
      <div className="appContent">
        <Header />
        <Switch>
          <Route exact path="/" component={UserNameForm} />
          <Route exact path="/chatRoomSelection" component={ChatRoomSelection} />
          <Route exact path="/physics" component={Physics} />
          <Route exact path="/english" component={English} />
          <Route exact path="/gaming" component={Gaming} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
