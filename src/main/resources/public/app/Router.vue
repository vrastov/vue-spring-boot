<script>
    define(["Vue", "vue-router"], function (Vue, VueRouter) {
        Vue.use(VueRouter);

        const asyncComp = function (componentName) {
            return function (resolve) {
                require([componentName], resolve);
            };
        };

        const routes = [
            {
                path: '/',
                component: asyncComp("vue!Home")
            }, {
                path: '/foo',
                component: asyncComp("vue!Foo")
            },
            {
                path: '/bar',
                component: asyncComp("vue!Bar")
            }
        ];

        return new VueRouter({
            routes: routes
        });
    })
</script>