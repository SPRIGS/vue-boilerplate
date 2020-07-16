require('./core/bootstrap');
require('./core/plugins');
require('./ApplicationStore');
require('./core/register/eventhandler');
require('./core/register/mixins');
require('./core/register/components');
import './../../assets/sass/5-components/_breadcrumbs.scss';

const app = new Vue({
    el: '#app',
    components: {
        TestComponent,
    },
    mounted() {
        this.$nextTick(function () {});
    },
    data: {
        store: ApplicationStore,
    },
    events: {},
    methods: {},
});
