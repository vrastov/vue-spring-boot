(function () {
    'use strict';

    requirejs.config({"paths": {"Vue": '/scripts/vue/2.6.10/vue'}});

    define(["Vue"],
        function (Vue) {
            new Vue({
                el: '#app',
                template: '<div>Hello Vue!</div>'
            });
        }
    );

})();




