<template>
  <q-page-container>
    <div class="q-px-lg q-pb-md">
      <div class="column items-end" style="height: 50px">
        <div class="col">
          <q-btn
            icon-right
            round
            @click.native="addIncome"
            color="primary"
            icon="add"
          />
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
        class="sticky-header-column-table"
        title="Ingresos"
        :data="tableData"
        :columns="columns"
        row-key="name"
        dark
        color="green"
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
              <q-badge color="green">
                {{ amountFormatted(props.row.amount) }}
              </q-badge>
            </q-td>

            <q-td key="actions" :props="props">
              <q-btn
                icon-right
                size="sm"
                round
                @click.native="editIncome(props.row)"
                color="blue"
                icon="edit"
              />
              <q-btn
                icon-right
                class="q-ml-xs"
                size="sm"
                round
                @click.native="removeIncome(props.row)"
                color="red"
                icon="delete"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page-container>
</template>

<script>
import localeMixin from "src/mixins/localeMixin";

export default {
  name: 'IncomesPage',
  mixins: [localeMixin],
  mounted() {
    this.loadData();
  },
  data () {
    return {
      dates: [],
      tableData: [],
      columns: [
        { name: 'name', label: 'Operación', field: 'name', align: 'center' },
        { name: 'date', label: 'Fecha', field: 'date', align: 'center' },
        { name: 'amount', label: 'Total', field: 'amount', align: 'center', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'actions', label: 'Acciones', align: 'center' },
      ],
    }
  },
  computed: {
    date: {
      get () {
        return this.$store.state.incomes.filters.date;
      },
      set (val) {
        this.$store.commit("incomes/SET_FILTER_DATE", val);
        setTimeout(() => {
          this.tableData = this.$store.getters["incomes/forList"];
        }, 1000)
      }
    }
  },
  methods: {
    addIncome () {
      this.$router.push({ name: "IncomesCreate" });
    },
    editIncome(income) {
      this.$router.push({ name: "IncomesEdit", params: { id: income.id }});
    },
    removeIncome (income) {
      this.$store.commit("incomes/REMOVE_INCOMING", income.id);

      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Ingreso eliminado correctamente'
      });
      setTimeout(() => {
        this.loadData();
      }, 1000)
    },
    loadData () {
      this.tableData = this.$store.getters["incomes/forList"];
      this.dates = this.$store.getters["incomes/groupedByDate"];
    }
  }
}
</script>

<style lang="sass">
  .sticky-header-column-table
    /* specifying max-width so the example can
      highlight the sticky column on any browser window */
    // max-width: 600px
    /* max height is important */
    .q-table__middle
      max-height: 400px
    td:first-child /* bg color is important for td; just specify one */
      background-color: #ff7043 !important
    td:not(:first-child)
      background-color: #cfd8dc !important
      color: white
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
      background: #00c853 !important
</style>
