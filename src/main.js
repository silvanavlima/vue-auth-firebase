import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase'

Vue.config.productionTip = false;

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8q3jql-ZXK3iprsoIFZ1NnYRgMmeTAIw",
    authDomain: "vue-auth-firebase-7d733.firebaseapp.com",
    databaseURL: "https://vue-auth-firebase-7d733.firebaseio.com",
    projectId: "vue-auth-firebase-7d733",
    storageBucket: "vue-auth-firebase-7d733.appspot.com",
    messagingSenderId: "93229610542"
  };
  firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
