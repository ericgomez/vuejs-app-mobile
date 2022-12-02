<template>
  <q-page-container padding>
    <p class="text-h4 text-center">Reportes mes a mes</p>
    <apex-chart type="bar" :options="options" :series="series" />
  </q-page-container>
</template>

<script>
import localeMixin from "src/mixins/localeMixin";

export default {
  name: 'ReportsPage',
  mixins: [localeMixin],
  mounted() {
    setTimeout(() => {
      const allIncomes = this.$store.state.incomes.incomes;
      const allExpenses = this.$store.state.expenses.expenses;
      const all = allIncomes.concat(allExpenses);

      if (all.length) {
        all.sort(function(a,b) {
          return new Date(a.date) - new Date(b.date);
        });

        const series = {};
        all.forEach(f => {
          const [year, month] = f.date.split("/");
          const date = `${month}/${year}`;

          if ( !series.hasOwnProperty(date)) {
            series[date] = 0;
          }
          if (f.type === "expense") {
            series[date] -= parseInt(f.amount);
          } else {
            series[date] += parseInt(f.amount);
          }
        });

        let seriesData = [];
        let categoriesData = [];
        for (let date in series) {
          categoriesData.push(date);
          seriesData.push(series[date]);
        }

        this.options = {
          xaxis: {
            categories: categoriesData
          }
        };
        this.series = [{
          name: 'Finanzas',
          data: seriesData
        }];
      }
    }, 500);
  },
  data () {
    return {
      options: {
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#F15B46'
              }, {
                from: -45,
                to: 0,
                color: '#c62828',
              }]
            },
            columnWidth: '80%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        chart: {
          id: 'vuechart-reports',
        },
        xaxis: {
          categories: []
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return this.amountFormatted(val);
            }
          }
        },
        yaxis: {
          title: {
            text: 'Importe €',
          }
        },
      },
      series: []
    }
  }
}
</script>
