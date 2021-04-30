import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                <Switch>
                    <Route path="/about" component={AboutPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/" component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}


