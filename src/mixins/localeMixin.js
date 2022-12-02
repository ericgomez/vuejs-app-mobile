export default {
  computed: {
    localeForDateInput() {
      return {
        days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
        firstDayOfWeek: 1
      };
    },
  },
  methods: {
    dateFormatted(date, type = 'Full') {
      const [year, month, day] = date.split("/");
      if (type === 'Day') {
        return `Día ${parseInt(day, 10)}`;
      }
      return `${day}/${month}/${year}`;
    },
    amountFormatted(amount) {
      return parseInt(amount).toLocaleString("es-ES", { style: 'currency', currency: 'EUR' });
    }
  }
};
