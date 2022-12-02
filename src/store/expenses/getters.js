import { groupByDate } from "./../../utils/helper";

export function totalExpenses(state) {
  return function (expenses) {
    return expenses.reduce((a, b) => {
      return a + parseInt(b['amount']);
    }, 0);
  };
}

export function forList(state) {
  let expenses = state.expenses;
  if (state.filters.date) {
    expenses = expenses.filter(e => {
      const [year, month] = e.date.split("/");
      const date = `${month}/${year}`;
      return state.filters.date === date;
    });
  }
  return expenses.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}

export function find(state) {
  return function (id) {
    return state.expenses.filter(e => e.id === id)[0];
  };
}

export function groupedByDate(state) {
  return groupByDate(state.expenses);
}
