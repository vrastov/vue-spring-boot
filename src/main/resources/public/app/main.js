(function () {
    'use strict';

    requirejs.config({"paths": {"Vue": '/scripts/vue/2.6.10/vue'}});
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




