<template>
    <div class="container">
        <div class="row">
            &nbsp;
        </div>
        <div class="row">
            <div class="col">
                <b-button-group vertical>
                    <b-button to="/foo/child1/noname1" >Top</b-button>
                    <b-button class="btn btn-info" to="/foo/child1/noname2" >Middle</b-button>
                    <b-button>Bottom</b-button>
                </b-button-group>
            </div>
            <div class="col-6">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            return Vue.component("Child1", {
                template: template,
                data() {
                    return {};
                }
            })
        }
    )
</script>