<script>
  import BaseAppForm from "./../BaseAppForm";

  export default {
    name: "ExpensesForm",
    extends: BaseAppForm, // extends of base component BaseAppForm
    props: ["form", "title", "editMode"],
    methods: {
      onSubmit: function () {
        if (!this.internal_form.date) {
          this.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'error',
            message: 'Debes seleccionar una fecha'
          });
          return;
        }
        if (this.internal_form.hasOwnProperty("id")) {
          this.update();
        } else {
          this.create();
        }
      },
      create () {
        this.internal_form.id = Date.now();
        this.$store.commit("expenses/ADD_EXPENSE", this.internal_form);

        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Gasto añadido correctamente'
        });

        this.$router.push({ name: "Expenses" });
      },
      update () {
        this.$store.commit("expenses/UPDATE_EXPENSE", this.internal_form);

        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Gasto actualizado correctamente'
        });

        return this.$router.back();
      }
    }
  }
</script>
