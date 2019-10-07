(function () {
    'use strict';

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    loadCss("css/bootstrap/4.3.1/bootstrap.css");
    loadCss("scripts/bootstrap-vue/2.0.2/bootstrap-vue.css");

    requirejs.config({"paths": {"Vue": '/scripts/vue/2.6.10/vue'}});
    requirejs.config({"paths": {"vue": ["/scripts/require-vuejs/1.1.3/require-vuejs"]}});
    requirejs.config({"paths": {"vue-router": ["/scripts/vue-router/3.1.3/vue-router"]}});
    requirejs.config({"paths": {"bootstrap-vue": ["/scripts/bootstrap-vue/2.0.2/bootstrap-vue"]}});

    define(["Vue", "vue-router", "bootstrap-vue", "vue!Home", "vue!Foo", "vue!Bar", "vue!App"],
        function (Vue, VueRouter, BootstrapVue, Home, Foo, Bar) {
            Vue.use(VueRouter);
            Vue.use(BootstrapVue);

            var routes = [
                {
                    path: '/',
                    component: Home
                }, {
                    path: '/foo',
                    component: Foo
                },
                {
                    path: '/bar',
                    component: Bar
                }
            ];

            var router = new VueRouter({
                routes: routes
            });

            new Vue({
                router: router,
                el: '#app',
                template: '<App/>'
            });
        }
    );

})();




