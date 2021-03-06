import React, { useState, useEffect } from "react";
import { Router, Route, Link } from "react-router-dom";
import { Role } from "./helpers/role";
import { history } from "./helpers/history";
import { authenticationService } from "./services/authentication.service";
import { PrivateRoute } from "./private-route";
import Admin from "./layouts/Admin";
import User from "./layouts/User";
import { HomePage } from "HomePage/HomePage";
import { LoginPage } from "loginPage/LoginPage";
import PublicNavbar from "publicIndex/PublicNavbar/PublicNavbar";
import PublicCategory from "publicIndex/PublicCategory/publicCategory";
import MainCategory from "components/Category/mainCategory";
import BannerCarosel from "components/Category/bannerCarosel";
import TodayOfferCarosel from "components/Category/TodaysOfferCarosel";
import DealOfTheWeekCarosel from "components/Category/DealOfTheWeekCarosel";
import Footer from "components/Footer/Footer";
import FanOfSth from "components/Category/FanOfSth";
import BestProductForYou from "components/Category/BestProductForYou";
import PopularCategory from "components/Category/PopularCategory";
import DiffrentCountries from "components/Category/DiffrentCountries";
import Expanding from "components/Category/Expanding";
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);

  useEffect(() => {
    authenticationService.currentUser.subscribe((x) => {
      setCurrentUser(x);
      setisAdmin(x && x.role === Role.Admin);
    });
  }, []);

  const logout = () => {
    authenticationService.logout();
    history.push("/login");
  };

  return (
    <Router history={history}>
      <div>
        {currentUser && (
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              {isAdmin && (
                <Link to="/admin/dashboard" className="nav-item nav-link">
                  Admin Panel
                </Link>
              )}
              <a onClick={logout} className="nav-item nav-link">
                Logout
              </a>
            </div>
          </nav>
        )}
        <PublicNavbar/>
        <PublicCategory/>
        <BannerCarosel/>
        <TodayOfferCarosel/>
        <DealOfTheWeekCarosel/>
        <MainCategory/>      
        <FanOfSth/>
        <BestProductForYou/>
        <PopularCategory/>
        <DiffrentCountries/>
        <Expanding/>
        <Footer/> 
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
        <Route path="/login" component={PublicNavbar} />
        <Route path="/login" component={PublicCategory} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}


export { App };
