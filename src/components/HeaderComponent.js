import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Double J Saloon</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Double J Saloon</h1>
                                <p>Live music, local hangout, fun atmosphere in the heart of Lake City!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}
export default Header;