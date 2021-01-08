import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp ({
  apiKey: "AIzaSyBe2AZjS-EPayHL-eUdL_xFrr37Q0zZ7Wc",
    authDomain: "calendar-vuejs-88e22.firebaseapp.com",
    databaseURL: "https://calendar-vuejs-88e22.firebaseio.com",
    projectId: "calendar-vuejs-88e22",
    storageBucket: "calendar-vuejs-88e22.appspot.com",
    messagingSenderId: "332300025036",
    appId: "1:332300025036:web:f398295153c3ae443c1669"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
