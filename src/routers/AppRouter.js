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
import { BlogManagement } from '../components/principal-content/BlogManagement';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavbarPage></NavbarPage>
                
                <Switch>
                    <Route exact path='/management' component={ LoginScreen } />
                    <PrivateRoutes path='/blog-management' component={ BlogManagement } />
                    <Route path="/" component= { DashboardRoutes } />
                </Switch>
                
                <Footer></Footer>
            </div>
        </Router>
    )
}
