export function isLogged(state) {
  return state.password && state.password === state.access;
}
