(function () {
    'use strict';

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




