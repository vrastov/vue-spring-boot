<template>
    <b-table striped hover :items="items" :fields="fields">
        <template v-slot:cell(name)="data">
            <b-link v-show="data.item.directory"
                    v-bind:to="`${data.item.to}`">
                <i class="far fa-folder"></i>
                {{ data.value }}
            </b-link>

            <span v-show="!data.item.directory"><i class="far fa-file"></i> {{ data.value }}</span>

        </template>
    </b-table>
</template>
<script>
    define(["Vue", "axios"],
        function (Vue, axios) {
            return Vue.component("Bar", {
                template: template,
                data() {
                    return {
                        fields: [
                            {
                                key: 'name',
                                label: 'Имя',
                                sortable: true
                            },
                            {
                                key: 'length',
                                label: 'Размер',
                                sortable: true
                            }
                        ],
                        items: []
                    }
                },
                methods: {
                    updateData() {
                        let path = "";
                        if (typeof this.$route.params.patch != 'undefined') {
                            path = "/" + this.$route.params.patch;
                        }
                        axios.get("/files" + path)
                            .then(response => {
                                this.items = response.data;
                                for (let i = 0; i < this.items.length; i++) {
                                    const item = this.items[i];
                                    item.to = this.$route.fullPath + '/' + item.name;
                                }
                                let strings = this.$route.fullPath.split("/");
                                strings.pop();
                                if (path !== "") {
                                    this.items.unshift({
                                        directory: true,
                                        length: 0,
                                        name: "..",
                                        to: strings.join("/")
                                    });
                                }
                            })
                            .catch(error => this.$bvToast.toast(error.message, {
                                title: `Error`,
                                toaster: 'b-toaster-top-right',
                                variant: 'danger',
                                solid: true,
                                appendToast: false
                            }))
                    }
                },
                mounted: function () {
                    this.updateData();
                },
                watch: {
                    '$route'() {
                        this.updateData();
                    }
                }
            })
        }
    )
</script>