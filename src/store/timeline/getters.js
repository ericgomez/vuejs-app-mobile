export function operationFiltered(state) {
  return function ({ allIncomes, allExpenses }) {
    let operations = {};

    if (allIncomes.length) {
      allIncomes = allIncomes.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
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
        return new Date(a.date) - new Date(b.date);
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
  };
}
