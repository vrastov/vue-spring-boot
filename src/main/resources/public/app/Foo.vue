<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <b-button disabled>Button</b-button>
                </div>
                <div class="col-sm">
                    <b-button to="/foo/child1" variant="success">Child1</b-button>

                </div>
                <div class="col-sm">
                    <b-button to="/foo/child2" variant="outline-danger">Child2</b-button>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            return Vue.component("Foo", {
                template: template,
                data() {
                    return {};
                }
            })
        }
    )
</script>