<template>
    <b-table striped hover :items="items" :fields="fields"></b-table>
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
                                label:'Имя',
                                sortable: true
                            },
                            {
                                key: 'length',
                                label:'Размер',
                                sortable: true
                            }
                        ],
                        items: []
                    }
                },
                mounted: function () {
                    axios.get("/files")
                        .then(response => (this.items = response.data))
                        .catch(error => this.$bvToast.toast(error.message, {
                            title: `Error`,
                            toaster: 'b-toaster-top-right',
                            variant:'danger',
                            solid: true,
                            appendToast: false
                        }))
                }
            })
        }
    )
</script>