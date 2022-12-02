export function ADD_INCOME(state, income) {
  income.icon = 'attach_money';
  income.type = 'income';
  state.incomes.push(income);
}

export function REMOVE_INCOME(state, id) {
  state.incomes = state.incomes.filter(i => i.id === id);
}

export function UPDATE_INCOME(state, income) {
  state.incomes = [
    ...state.incomes.filter(i => i.id !== income.id),
    income
  ];
}

export function SET_FILTER_DATE(state, date) {
  state.filters.date = date;
}

export function RESET(state) {
  state.filters.date = null;
  state.incomes = [];
}

