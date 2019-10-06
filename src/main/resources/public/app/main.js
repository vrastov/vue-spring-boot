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
    requirejs.config({"paths": {"bootstrap-vue": ["/scripts/bootstrap-vue/2.0.2/bootstrap-vue"]}});

    define(["Vue", "bootstrap-vue", "vue!App"],
        function (Vue, BootstrapVue) {
            Vue.use(BootstrapVue);
            new Vue({
                el: '#app',
                template: '<App/>'
            });
        }
    );

})();




