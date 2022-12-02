<template>
  <div class="q-pa-md">
    <q-bar dark>
      <p class="text-h4">{{ title }}</p>
    </q-bar>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="internal_form.name"
        label="Operación"
        hint="Tipo de operación"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo requerido']"
      />

      <q-input
        filled
        type="number"
        v-model="internal_form.amount"
        label="Cantidad"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Campo requerido',
          val => val > 0 && val < 10000 || 'Introduce una cantidad de verdad'
        ]"
      />

      <q-date
        v-model="internal_form.date"
        label="Fecha"
        :locale="localeForDateInput"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Campo requerido',
        ]"
      />

      <div>
        <q-btn :label="$props.editMode ? 'Actualizar' : 'Guardar'" type="submit" color="primary"/>
        <q-btn label="Volver" color="default" @click="$router.back()" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import localeMixin from "src/mixins/localeMixin";

export default {
  name: 'BaseAppFormComponent',
  mixins: [localeMixin],
  mounted () {
    // edit mode
    if (this.$props.editMode) {
      setTimeout(() => {
        this.internal_form = this.$props.form;
      }, 10);
    }
  },
  data () {
    return {
      internal_form: {
        name: null,
        amount: null,
        date: null
      }
    }
  }
}
</script>

