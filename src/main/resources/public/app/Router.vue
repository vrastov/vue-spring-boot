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
            },
            {
                path: '/foo',
                component: asyncComp("vue!Foo"),
                meta: {
                    breadcrumb: "Фуу"
                },
                children: [
                    {
                        path: 'child1',
                        component: asyncComp("vue!foo/Child1"),
                        meta: {
                            breadcrumb: "дитя фуу"
                        },
                        children: [
                            {
                                path: 'noname1',
                                component: asyncComp("vue!foo/child1/Noname1"),
                                meta: {
                                    breadcrumb: "Но наме..."
                                }
                            },{
                                path: 'noname2',
                                component: asyncComp("vue!foo/child1/Noname2"),
                            }
                        ]
                    },
                    {
                        path: 'child2',
                        component: asyncComp("vue!foo/Child2")
                    }
                ]
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