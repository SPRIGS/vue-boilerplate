<template>
    <div id="test-component">
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            
                            <div class="card-image"></div>
                            <img
                                src="https://vuejs.org/images/logo.png"
                                alt="vue-logo"
                                class="text-center"
                            />
                            <h1 style="line-height: 1.5">
                                Welcomee to
                                <br />
                                <a
                                    href="https://sprigs.eu/"
                                    target="_blank"
                                    style="font-family: 'Rubik', sans-serif; background-color: #2C2C2C; color:#fff; display: inline-block; padding: 4px 8px; text-decoration: none!important; border-radius: 2px;"
                                >SPRIGS_</a>
                                <br />Vue.js boilerplate!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


// let TestComponent2 =
//         () => import(/* webpackChunkName: "test-component-2" */ './TestComponent2.vue');

export default {
    components: {
        // TestComponent2
    },
    name: 'test-component',
    props: {},
    mounted() {
        this.$nextTick(function() {});
    },
    data() {
        return {
        };
    },
    computed: {},
    watch: {},
    methods: {}
};
</script>

<style lang="scss">
#test-component {
    animation: fadeIn 300ms 1s linear forwards;
    opacity: 0;
    padding: 5rem 0;
    img {
        display: block;
        margin: 0 auto 20px;
        width: 70px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
}
code {
    background: #ddd;
    padding: 2px 5px;
    border-radius: 4px;
}
</style>
