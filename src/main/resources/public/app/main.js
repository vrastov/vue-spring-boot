(function () {
    'use strict';

    requirejs.config({"paths": {"Vue": '/webjars/vue/2.6.11/vue'}});

    define(["Vue"],
        function (Vue) {
            new Vue({
                el: '#app',
                template: '<div>Hello Vue!</div>'
            });
        }
    );

})();




