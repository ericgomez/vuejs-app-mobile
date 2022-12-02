export function ADD_EXPENSE (state, expense) {
  expense.icon = "money_off";
  expense.type = "expense";
  state.expenses.push(expense);
}
export function REMOVE_EXPENSE (state, id) {
  state.expenses = state.expenses.filter(i => i.id !== id);
}

export function UPDATE_EXPENSE (state, expense) {
  state.expenses = [
    ...state.expenses.filter(i => i.id !== expense.id),
    expense
  ]
}

export function SET_FILTER_DATE (state, date) {
  state.filters.date = date;
}

export function RESET (state) {
  state.filters.date = null;
  state.expenses = [];
}
