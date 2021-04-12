import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoutes = ({
    component: Component,
    ...rest
}) => {

    const { user } = useContext(AuthContext);

    return (
        <Route {...rest} 
            component={(props) =>(
                ( user.logged ) 
                ? <Component {...props} />
                : <Redirect to='/management' /> 
            )}
        />
    )
}

PrivateRoutes.propTypes = {
    component: PropTypes.func.isRequired
}