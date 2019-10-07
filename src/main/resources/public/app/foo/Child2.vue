<template>
    <div>Child2</div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            return Vue.component("Child2", {
                template: template,
                data() {
                    return {};
                }
            })
        }
    )
</script>