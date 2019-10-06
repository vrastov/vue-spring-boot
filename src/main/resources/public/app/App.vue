<template>
    <div>{{text}}</div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            return Vue.component("App", {
                template: template,
                data: function () {
                    return {
                        text: "Hello Vue component!"
                    }
                }
            });
        }
    );
</script>