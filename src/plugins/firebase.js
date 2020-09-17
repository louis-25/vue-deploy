import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((fu) => store.commit('setFireUser', fu))

// 다른 페이지에서 전역적으로 사용이 가능하다
Vue.prototype.$firebase = firebase
