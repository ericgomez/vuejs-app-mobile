<template>
  <div class="q-pa-md">

    <expenses-form
      :form="form"
      title="Añadir gasto"
      :edit-mode="false"
    />

  </div>
</template>

<script>
  import ExpensesForm from "./../../components/Expenses/ExpensesForm";

  export default {
    name: "ExpensesCreate",
    components: {ExpensesForm},
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
