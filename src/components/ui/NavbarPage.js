import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import logo from '../../static/icono.jpg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavbarPage = () => {

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
    }

    return (
        <Navbar className="navbar navbar-expand-sm navbar-dark" expand="lg">
            <Navbar.Brand href="#home">
                <img className='logo-navbar' src={logo} alt='Logo Matias Rodriguez'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='ms-4'>
                <Nav className="navbar-nav ms-auto me-4">
                    <NavLink className="nav-item nav-link" exact to="/">Inicio</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/about-us">¿Quienes somos?</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/published">Publicaciones</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/blog">Blog</NavLink>
                    <NavLink className="nav-item nav-link" exact to="/contact">Contacto</NavLink>
                    {
                        user.logged &&
                        <NavLink
                            onClick={handleLogout}
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/login"
                        > Logout </NavLink>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}