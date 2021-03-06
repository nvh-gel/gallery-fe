import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import GroupList from "./GroupList";
import GroupEdit from "./GroupEdit";

class App extends Component {
    "use strict";

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/groups" exact={true} component={GroupList}/>
                    <Route path="/groups/:id" component={GroupEdit}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
