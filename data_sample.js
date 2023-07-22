


scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});