import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
