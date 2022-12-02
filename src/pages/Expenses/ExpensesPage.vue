<template>
  <q-page-container>
    <div class="q-px-lg q-pb-md">
      <div class="column items-end">
        <div class="col">
          <q-btn icon-right class="q-ml-xs" @click.native="addExpense" round color="primary" icon="add" />
        </div>
      </div>

      <q-select
        filled
        v-model="date"
        :options="dates"
        label="Selecciona un mes"
        clearable
      />
      <q-table
        class="expenses-sticky-header-column-table"
        :title="expensesComputed"
        :data="tableData"
        :columns="columns"
        row-key="name"
        dark
        color="red"
        virtual-scroll
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="date" :props="props">
              {{ dateFormatted(props.row.date) }}
            </q-td>
            <q-td key="amount" :props="props">
              <q-badge color="red">
                {{ amountFormatted(props.row.amount) }}
              </q-badge>
            </q-td>
            <q-td key="actions" :props="props">
              <q-btn icon-right size="sm" round @click.native="editExpense(props.row)" color="blue" icon="edit" />
              <q-btn icon-right class="q-ml-xs" size="sm" round @click.native="removeExpense(props.row)" color="red" icon="delete" />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page-container>
</template>

<script>
  import localeMixin from "./../../mixins/localeMixin";

  export default {
    name: "ExpensesPage",
    mixins: [localeMixin],
    mounted () {
      this.loadData();
    },
    data () {
      return {
        tableData: [],
        dates: [],
        columns: [
          { name: 'name', label: 'Operación', field: 'name', align: 'center' },
          { name: 'date', label: 'Fecha', field: 'date', align: 'center' },
          { name: 'amount', label: 'Total', field: 'amount', align: 'center', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
          { name: 'actions', label: 'Acciones', align: 'center' },
        ],
      }
    },
    computed: {
      expensesComputed() {
        const expensesFiltered = this.$store.getters["expenses/totalExpenses"](
          this.$store.getters["expenses/forList"]
        );

        return `Gastos ${this.amountFormatted(expensesFiltered)}`;
      },
      date: {
        get () {
          return this.$store.state.expenses.filters.date;
        },
        set (val) {
          this.$store.commit("expenses/SET_FILTER_DATE", val);

          setTimeout(() => {
            this.tableData = this.$store.getters["expenses/forList"];
          }, 1000)
        }
      }
    },
    methods: {
      addExpense () {
        return this.$router.push({ name: 'ExpensesCreate' })
      },
      editExpense (expense) {
        this.$router.push({ name: "ExpensesEdit", params: { id: expense.id }});
      },
      removeExpense (expense) {
        this.$store.commit("expenses/REMOVE_EXPENSE", expense.id);

        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Gasto eliminado correctamente'
        });
        setTimeout(() => {
          this.loadData();
        }, 1000);
      },
      loadData () {
        this.tableData = this.$store.getters["expenses/forList"];
        this.dates = this.$store.getters["expenses/groupedByDate"];
      }
    },
  }
</script>

<style lang="sass">
  .expenses-sticky-header-column-table
    /* specifying max-width so the example can
      highlight the sticky column on any browser window */
    max-width: 600px
    /* max height is important */
    .q-table__middle
      max-height: 400px
    td:first-child /* bg color is important for td; just specify one */
      background-color: #ff7043 !important
    tr:first-child th
      position: sticky
      top: 0
      opacity: 1 /* opacity is important */
      z-index: 2 /* higher than z-index for td below */
      background: #fff /* bg color is important; just specify one */
    tr:first-child th:first-child
      z-index: 3 /* highest z-index */
    td:first-child
      z-index: 1
    td:first-child, th:first-child
      position: sticky
      left: 0
    thead th
      color: white !important
      background: #ad1457 !important
</style>
