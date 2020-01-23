<template>
    <div class="container">
        <div class="alert alert-success">
            {{text}}
        </div>
    </div>
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