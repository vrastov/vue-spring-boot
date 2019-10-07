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

    define(['config'], function () {
        requirejs(['app']);
    });

})();




