<script>
import BaseAppForm from "components/BaseAppForm";

export default {
  name: 'IncomesForm',
  extends: BaseAppForm, // extends of base component BaseAppForm
  props: ["form", "title", "editMode"],
  methods: {
    onSubmit () {
      if (!this.internal_form.date) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'error',
          message: 'Debes seleccionar una fecha'
        });
        return;
      }
      if (this.$props.editMode) {
        this.update();
      } else {
        this.create();
      }
    },
    create () {
      this.internal_form.id = Date.now();
      this.$store.commit("incomes/ADD_INCOME", this.internal_form);

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Ingreso añadido correctamente'
      });

      this.$router.back();
    },
    update () {
      this.$store.commit("incomes/UPDATE_INCOME", this.internal_form);

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Ingreso actualitzado correctamente'
      });

      this.$router.back();
    }
  }
}
</script>
