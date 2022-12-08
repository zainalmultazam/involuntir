import firebase from '../config/firebaseConfig';

const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => '')
    .catch((err) => '');
};

export default socialMediaAuth;
