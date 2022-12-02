<template>
  <div class="q-pa-md">

    <expenses-form
      :form="form"
      title="Editar gasto"
      :edit-mode="true"
    />

  </div>
</template>

<script>
  import ExpensesForm from "./../../components/Expenses/ExpensesForm";

  export default {
    name: "ExpensesEdit",
    components: {ExpensesForm},
    mounted () {
      this.form = this.$store.getters["expenses/find"](this.$route.params.id);
    },
    data () {
      return {
        form: {
          name: null,
          amount: null,
          date: null
        }
      }
    },
  }
</script>
