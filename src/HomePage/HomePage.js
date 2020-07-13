import React, { useState, useEffect } from "react";
import { userService } from "../services/user.service";
import { authenticationService } from "../services/authentication.service";

//class HomePage extends React.Component {
function HomePage() {
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //         currentUser: authenticationService.currentUserValue,
  //         userFromApi: null
  //     };
  // }
  const [currentUser, setCurrentUser] = useState(
    authenticationService.currentUserValue
  );
  const [userFromApi, setUserFromApi] = useState(null);

  // componentDidMount() {
  //     const { currentUser } = this.state;
  //     userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
  // }

  // useEffect(() => {
  //   setCurrentUser(authenticationService.currentUserValue);
  //   userService
  //     .getById(currentUser.id)
  //     .then((userFromApi) => setUserFromApi(userFromApi));
  // });

  useEffect(() => {
    const fetchState = {
      cancel: false,
    };
    fetchUser(fetchState);
    return () => {
      fetchState.cancel = true;
    };
  }, []);

  async function fetchUser(fetchState) {
    const currentUser = authenticationService.currentUserValue;
    if (fetchState.cancel) {
      return null;
    }
    setCurrentUser(currentUser);
    userService
      .getById(currentUser.id)
      .then((userFromApi) => setUserFromApi(userFromApi));
  }

  //render() {
  //const { currentUser, userFromApi } = this.state;
  return (
    <div>
      <h1>Home</h1>
      <p>Youre logged in with React & JWT!!</p>
      <p>
        Your role is:
        <strong>{currentUser.role}</strong>.
      </p>
      <p>This page can be accessed by all authenticated users.</p>
      <div>
        Current user from secure api end point:
        {userFromApi && (
          <ul>
            <li>
              {userFromApi.firstName} {userFromApi.lastName}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
//}
export { HomePage };
