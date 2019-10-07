<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/foo">Ссылка foo</b-nav-item>
                    <b-nav-item to="/bar">Ссылка bar</b-nav-item>
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
                },
                watch: {
                    '$route'() {
                        const breadcrumb = [rootBreadcrumb];
                        for (let i = 0; i < this.$route.matched.length; i++) {
                            let matched = this.$route.matched[i];
                            if (typeof matched.meta.breadcrumb != 'undefined') {
                                breadcrumb.push({
                                    text: matched.meta.breadcrumb,
                                    href: "/#" + matched.path
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