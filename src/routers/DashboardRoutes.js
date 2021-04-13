import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BlogSection } from '../components/principal-content/BlogSection';
import { CardsPublicationsSection } from '../components/principal-content/CardsPublicationsSection';
import { ContactSection } from '../components/principal-content/ContactSection';
import { MainPage } from '../components/principal-content/MainPage';
import { WhoAreWeSection } from '../components/principal-content/WhoAreWeSection';

export const DashboardRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={ MainPage } />
                <Route exact path='/quienes-somos' component={ WhoAreWeSection } />
                <Route exact path='/publicaciones' component={ CardsPublicationsSection } />
                <Route exact path='/blog' component={ BlogSection } />
                <Route exact path='/contacto' component={ ContactSection } />
                <Redirect to='/' />
            </Switch>
        </>
    )
}
