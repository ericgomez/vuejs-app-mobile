<template>
  <div class="q-pa-md">

    <incomes-form
      :form="form"
      title="Editar ingreso"
      :edit-mode="true"
    />

  </div>
</template>

<script>
import IncomesForm from "components/Incomes/IncomesForm";

export default {
  name: 'IncomesEdit',
  components: {IncomesForm},
  mounted() {
    this.form = this.$store.getters["incomes/find"](this.$route.params.id);
  },
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
