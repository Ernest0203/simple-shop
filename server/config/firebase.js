const firebase = require('firebase');

let config = {
  apiKey: "AIzaSyCWDWd-adHoleh_MpP0CV1oLUJKEcLSOoI",
	authDomain: "spices-e1b06.firebaseapp.com",
	databaseURL: "https://portfolio-9e3d2.firebaseio.com",
	projectId: "portfolio-9e3d2",
	storageBucket: "portfolio-9e3d2.appspot.com",
	messagingSenderId: "518042399685"//"1053636408878"
};
firebase.initializeApp(config);

module.exports = firebase;