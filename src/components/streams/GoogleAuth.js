import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signIn, signOut } from "../../features/auth/authSlice";
let auth = null;

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((store) => store.auth);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "473988074778-5cto6v7l8fn8lq2ipjn8md73rnpthbkc.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Streamy",
        })
        .then(() => {
          auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(signIn(auth.currentUser.get().getId()));
    } else {
      dispatch(signOut());
    }
  };
  const onSignInClick = () => {
    auth.signIn();
  };
  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };
  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
