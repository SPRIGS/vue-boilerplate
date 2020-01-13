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
                            <h3 class="text-center">Say hello to my little vue component!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    mounted() {
        this.$nextTick(function() {});
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {}
};
</script>

<style lang="scss" scoped>
#test-component { 
    animation: fadeIn 300ms 1s linear forwards;
    opacity: 0;
    padding: 5rem 0;
}
img {
    display: block;
    margin: 0 auto 20px;
    width: 50px;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>
