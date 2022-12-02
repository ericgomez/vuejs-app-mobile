<template>
  <div class="q-pa-md">

    <incomes-form
      :form="form"
      title="Añadir ingreso"
      :edit-mode="false"
    />

  </div>
</template>

<script>
import IncomesForm from "components/Incomes/IncomesForm";

export default {
  name: 'IncomesCreate',
  components: {IncomesForm},
  data () {
    return {
      form: {
        name: null,
        amount: null,
        date: null
      }
    }
  }
}
</script>
