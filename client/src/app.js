import React from "react";

import { BrowserRouter as Router,Routes ,Route  } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" exact Component={(Join)}/> {/*what user sees for the first time when he opens the code and puts his data in the form*/}
            <Route path="/Chat" Component={Chat}/> {/*upar wala data passed to "/chat" with querystrings and when data mil gya we inititate Chat*/}
        </Routes>
    </Router>
);

export default App;