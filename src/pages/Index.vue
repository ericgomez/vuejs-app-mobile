<template>
  <q-page class="q-pl-lg">
    <div class="q-px-lg q-pb-md flex flex-center q-mt-md">
      <q-bar dark="" v-if="Object.entries(timeline).length === 0">
        No hay operaciones
      </q-bar>
    </div>
    <div
      class="fit row wrap justify-center items-center content-center"
      v-if="Object.entries(timeline).length === 0"
    >
      <q-icon size="120px" :name="faceSvg" />
    </div>

    <q-timeline color="primary" v-else>
      <q-timeline-entry heading>
        Movimientos
      </q-timeline-entry>

      <div v-for="(operation, date) in timeline">
        <q-timeline-entry
          title="Ingresos"
          :subtitle="date"
          icon="attach_money"
          :body="`+ ${amountFormatted(operation['totalIncomes'])}`"
        />

        <q-timeline-entry
          title="Gastos"
          :subtitle="date"
          icon="money_off"
          :body="`- ${amountFormatted(operation['totalExpenses'])}`"
        />

        <q-timeline-entry
          title="Beneficios/Perdidas"
          :subtitle="date"
          icon="bolt"
          :body="monthProfit(operation)"
        />
      </div>
    </q-timeline>
  </q-page>
</template>

<script>
import localeMixin from "src/mixins/localeMixin";
import { operationsFiltered } from "src/utils/helper";

export default {
  name: 'PageIndex',
  mixins: [localeMixin],
  mounted () {
    const allIncomes = this.$store.state.incomes.incomes;
    const allExpenses = this.$store.state.expenses.expenses;
    //this.timeline = this.$store.getters['timeline/operationsFiltered']({ allIncomes, allExpenses });
    this.timeline = operationsFiltered({ allIncomes, allExpenses });

    this.$root.$on("resetData", () => {
      this.timeline = []
    });
  },
  data () {
    return {
      timeline: [],
      colorFace: '#B33636',
      colorHair: '#FFD700'
    }
  },
  computed: {
    faceSvg () {
      const colorFace = this.colorFace.replace('#', '%23');
      const colorHair = this.colorHair.replace('#', '%23');
      return `img:data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" fill="${colorFace}"><path fill="none" d="M0 0h24v24H0V0z"/><path stroke="${colorHair}" fill="${colorHair}" stroke-linecap="round" opacity=".5" d="M17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM8.08 5.03C6.37 6 5.05 7.58 4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44z"/><path stroke="none" fill="${colorFace}" stroke-linecap="round"  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47 5.05 7.58 6.37 6 8.08 5.03zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55 1.83 2.26 4.62 3.7 7.75 3.7.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"/><circle cx="9" cy="13" r="1.25"/><circle cx="15" cy="13" r="1.25"/><line x1="0" y1="30" x2="200" y2="200" style="stroke:rgb(200,10,10);stroke-width:2" /></svg>`
    }
  },
  methods: {
    monthProfit (operation) {
      const diff = operation['totalIncomes'] - operation['totalExpenses'];
      if (diff >= 0) {
        return `+ ${this.amountFormatted(diff)}`;
      }
      return this.amountFormatted(diff);
    }
  }
}
</script>

