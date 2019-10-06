<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Ссылка</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" disabled>Вход</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
        <div>{{text}}</div>
    </div>
</template>
<script>
    define(["Vue"],
        function (Vue) {
            return Vue.component("App", {
                template: template,
                data: function () {
                    return {
                        text: "Hello Vue component!",
                        breadcrumb: [{text: "Главная"}]
                    }
                },
                mounted() {
                    console.log("Oops");
                    this.$bvToast.toast(`Toast body content`, {
                        title: `Load OK`,
                        toaster: 'b-toaster-top-right',
                        solid: true,
                        appendToast: false
                    });
                }
            });
        }
    );
</script>