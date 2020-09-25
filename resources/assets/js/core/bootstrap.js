window._ = require('lodash');
window.Promise = require('promise');

window.Vue = require('vue');
Vue.config.productionTip = false;

window.axios = require('axios');

window.EventKeys = require('../EventKeys');

// Smoothscroll polyfix for Safari
window.smoothscroll = require('smoothscroll-polyfill');
smoothscroll.polyfill();
