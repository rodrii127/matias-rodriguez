import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NavbarPage } from '../components/ui/NavbarPage';
import { MainPage } from '../components/principal-content/MainPage';
import { Footer } from '../components/ui/Footer';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavbarPage></NavbarPage>
                
                <Switch>
                    <Route exact path="/" component= { MainPage } />
                    <Route path='/management' component={ LoginScreen } />
                    <Redirect to='/' />
                </Switch>
                
                <Footer></Footer>
            </div>
        </Router>
    )
}
