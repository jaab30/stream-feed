import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import StreamList from '../pages/StreamList';
import StreamCreate from '../pages/StreamCreate';
import StreamDelete from '../pages/StreamDelete';
import StreamEdit from '../pages/StreamEdit';
import StreamShow from '../pages/StreamShow';
import Header from "./Header";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/edit/:id" exact component={StreamEdit} />
                    <Route path="/new" exact component={StreamCreate} />
                    <Route path="/delete/:id" exact component={StreamDelete} />
                    <Route path="/:id" exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App




