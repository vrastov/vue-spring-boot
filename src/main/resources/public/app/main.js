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

    requirejs.config({"paths": {"Vue": '/webjars/vue/2.6.11/vue'}});
    requirejs.config({"paths": {"vue": ["/scripts/require-vuejs/1.1.3/require-vuejs"]}});

    define(["Vue", "vue!App"],
        function (Vue) {
            new Vue({
                el: '#app',
                template: '<App/>'
            });
        }
    );

})();




