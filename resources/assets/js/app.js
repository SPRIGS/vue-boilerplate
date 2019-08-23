require('./core/bootstrap');
require('./core/plugins');
require('./ApplicationStore');
require('./core/register/eventhandler');
require('./core/register/mixins');
require('./core/register/components');

const app = new Vue({
    el: '#app',
    mounted() {
        this.$nextTick(function() {});
    },
    data: {
        store: ApplicationStore
    },
    events: {},
    methods: {}
});
