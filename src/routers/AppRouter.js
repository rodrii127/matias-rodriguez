import React from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { NavbarPage } from '../components/ui/NavbarPage';
import { Footer } from '../components/ui/Footer';
import { BlogAdministrator } from '../components/principal-content/blog-management/BlogAdministrator';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavbarPage></NavbarPage>
                
                <Switch>
                    <Route exact path='/management' component={ LoginScreen } />
                    <PrivateRoutes path='/blog-management' component={ BlogAdministrator } />
                    <Route path="/" component= { DashboardRoutes } />
                </Switch>
                
                <Footer></Footer>
            </div>
        </Router>
    )
}
