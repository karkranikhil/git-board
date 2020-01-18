import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/index";
import HomePage from "./Pages/homepage/index";
import DashboardPage from "./Pages/dashboardpage/index";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard/:owner/:name" component={DashboardPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
