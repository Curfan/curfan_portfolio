import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyB7xsBv_hETQKgQBprPn4WHnCUJHYUO41M',
	authDomain: 'curfan-portfolio.firebaseapp.com',
	databaseURL: 'https://curfan-portfolio.firebaseio.com',
	projectId: 'curfan-portfolio',
	storageBucket: 'curfan-portfolio.appspot.com',
	messagingSenderId: '744471586954',
	appId: '1:744471586954:web:03ef91b62e0d7d6677e573',
	measurementId: 'G-J6WE45VFCC',
};

firebase.initializeApp(config);

export default firebase;
