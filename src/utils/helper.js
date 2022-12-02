export function groupByDate(data) {
  let dates = [];
  data.forEach(e => {
    const [year, month] = e.date.split("/"); // 20/10/2020
    const date = `${month}/${year}`; // 10/2019 11/2019
    if (!dates.includes(date)) {
      dates.push(date);
    }
  });
  return dates;
}

export function operationsFiltered({ allIncomes, allExpenses }) {
  let operations = {};
  if (allIncomes.length) {
    allIncomes = allIncomes.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    allIncomes.forEach(i => {
      const [year, month] = i.date.split("/");
      const date = `${month}/${year}`;
      if (!operations.hasOwnProperty(date)) {
        operations[date] = {
          incomes: [],
          totalIncomes: 0,
          expenses: [],
          totalExpenses: 0
        };
      }
      operations[date].totalIncomes += parseInt(i.amount);
      operations[date].incomes.push(i);
    });
  }

  if (allExpenses.length) {
    allExpenses = allExpenses.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    allExpenses.forEach(e => {
      const [year, month] = e.date.split("/");
      const date = `${month}/${year}`;
      if (!operations.hasOwnProperty(date)) {
        operations[date] = {
          incomes: [],
          totalIncomes: 0,
          expenses: [],
          totalExpenses: 0
        };
      }
      operations[date].totalExpenses += parseInt(e.amount);
      operations[date].expenses.push(e);
    });
  }
  return operations;
}
