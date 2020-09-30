import React from "react";
import { Route } from "react-router-dom";
import CaseStudies from "./components/Main/CaseStudies";
import Skills from "./components/Main/Skills";
import AboutUs from "./components/Main/AboutUs";
import { Switch } from 'react-router'
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./components/Main";
import Header from "./components/Header";
const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/case-studies" component={CaseStudies} />
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={AboutUs} />
            </Switch>
        </Router>
);
};

export default App;
