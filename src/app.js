import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { Role } from './helpers/role'
import { history } from './helpers/history'
import { authenticationService } from './services/authentication.service'
import { PrivateRoute } from './private-route'
import Admin from './layouts/Admin'
import { HomePage } from 'HomePage/HomePage';
import { LoginPage } from 'loginPage/LoginPage';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                {isAdmin && <Link to="/admin/dashboard" className="nav-item nav-link">Admin Panel</Link>}
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    {/* <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3"> */}
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            {/* </div>
                        </div>
                    </div>
                </div> */}
            </Router>
        );
    }
}

export { App };
