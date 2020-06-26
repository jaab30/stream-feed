import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from '../pages/StreamList';
import StreamCreate from '../pages/StreamCreate';
import StreamDelete from '../pages/StreamDelete';
import StreamEdit from '../pages/StreamEdit';
import StreamShow from '../pages/StreamShow';
import Header from "./Header";

const App = () => {
    return (
        <div className="ui container">
            <Router>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/edit" exact component={StreamEdit} />
                <Route path="/new" exact component={StreamCreate} />
                <Route path="/delete" exact component={StreamDelete} />
                <Route path="/show" exact component={StreamShow} />
            </Router>
        </div>
    )
}

export default App




