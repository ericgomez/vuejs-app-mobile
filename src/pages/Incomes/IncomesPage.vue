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
    loadData () {
      this.tableData = this.$store.getters["incomes/forList"];
      this.dates = this.$store.getters["incomes/groupedByDate"];
    }
  }
}
</script>

