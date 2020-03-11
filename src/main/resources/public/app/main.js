(function () {
    'use strict';

    function loadCss(url) {
        let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    loadCss("/webjars/bootstrap/4.4.1/css/bootstrap.css");
    loadCss("/webjars/bootstrap-vue/2.1.0/dist/bootstrap-vue.css");

    // requirejs.config({"paths": {"Vue": '/webjars/vue/2.6.11/vue'}});
    requirejs.config({"paths": {"vue": '/webjars/vue/2.6.11/vue'}});
    requirejs.config({"paths": {"sfc": ["/scripts/require-vuejs/1.1.3/require-vuejs"]}});
    requirejs.config({"paths": {"bootstrap-vue": ["/webjars/bootstrap-vue/2.1.0/dist/bootstrap-vue"]}});

    define(["vue", "bootstrap-vue", "sfc!App"],
        function (Vue, BootstrapVue) {
            Vue.use(BootstrapVue);
            new Vue({
                el: '#app',
                template: '<App/>'
            });
        }
    );

})();




