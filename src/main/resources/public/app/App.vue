<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-for="item in menuItems" v-bind:to="item.to" v-bind:key="item.to" active-class="active">
                        {{item.name}}
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" disabled>Вход</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            const rootBreadcrumb = {
                text: "Главная",
                href: "/#/"
            };

            return Vue.component("App", {
                template: template,
                data() {
                    return {
                        menuItems: [],
                        breadcrumb: [rootBreadcrumb]
                    }
                },
                mounted() {
                    this.$bvToast.toast(`Toast body content`, {
                        title: `Load OK`,
                        toaster: 'b-toaster-top-right',
                        solid: true,
                        appendToast: false
                    });
                    let routers = this.$router.options.routes;
                    for (let i = 0; i < routers.length; i++) {
                        if (typeof routers[i].meta != 'undefined' && typeof routers[i].meta.menuItem != 'undefined') {
                            this.menuItems.push({
                                name: routers[i].meta.menuItem,
                                to: routers[i].path
                            });
                        }
                    }
                },
                watch: {
                    '$route'() {
                        const breadcrumb = [rootBreadcrumb];
                        for (let i = 0; i < this.$route.matched.length; i++) {
                            let matched = this.$route.matched[i];
                            if (typeof matched.meta.breadcrumb != 'undefined') {
                                breadcrumb.push({
                                    text: matched.meta.breadcrumb,
                                    to: matched.path
                                });
                            }
                            this.breadcrumb = breadcrumb;
                        }
                    }
                }
            });
        }
    );
</script>