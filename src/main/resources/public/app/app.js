(function () {
    'use strict';

    define(["Vue", "bootstrap-vue", "vue!Router", "vue!App"],
        function (Vue, BootstrapVue, Router) {
            Vue.use(BootstrapVue);

            new Vue({
                router: Router,
                el: '#app',
                template: '<App/>'
            });
        }
    );

})();