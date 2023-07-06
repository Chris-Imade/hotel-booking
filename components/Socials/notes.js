// signInSilently()
// May be called e.g. after of your main component mounts. This method returns a Promise that resolves with the current user and rejects with an error otherwise.

// To see how to handle errors read signIn() method

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};

// Note that isSignedIn() can return true but getCurrentUser() can return null in which case you can call signInSilently() to recover the user. 
// However, it may happen that calling signInSilently() rejects with an error (e.g. due to a network issue).

// getCurrentUser()
// This method resolves with null or userInfo object of the currently signed-in user. The call never rejects and in the native layer, this is a synchronous call.

const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  setState({ currentUser });
};

// getTokens()
// signOut()
// Signs out the current user.

signOut = async () => {
  try {
    await GoogleSignin.signOut();
    setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

// revokeAccess()
// Removes your application from the user authorized applications. Read more about it here and here.

revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    // Google Account disconnected from your app.
    // Perform clean-up actions, such as deleting data associated with the disconnected account.
  } catch (error) {
    console.error(error);
  }
};
// hasPlayServices(options)
// Checks if device has Google Play Services installed. Always resolves to true on iOS.

// Presence of up-to-date Google Play Services is required to show the sign in modal, but it is not required to perform calls to configure and signInSilently. Therefore, we recommend to call hasPlayServices directly before signIn.

try {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // google services are available
} catch (err) {
  console.error('play services are not available');
}

// statusCodes
"SIGN_IN_CANCELLED"
"IN_PROGRESS"
"SIGN_IN_REQUIRED"
"PLAY_SERVICES_NOT_AVAILABLE"

// GoogleSigninButton
// signin button

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
 
<GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={this._signIn}
  disabled={this.state.isSigninInProgress}
/>;

// userInfo
// Example userInfo which is returned after successful sign in.

let response = {
  idToken: "string",
  serverAuthCode: "string",
  scopes: "Array<string>",
  user: {
    email: "string",
    id: "string",
    givenName: "string",
    familyName: "string",
    photo: "string", // url
    name: "string" // full name
  }
}