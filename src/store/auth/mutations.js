export function LOGOUT(state) {
  state.password = null;
}

export function SET_ACCESS(state, password) {
  if (state.firstAccess) {
    state.access = password;
    state.password = password;
    state.firstAccess = false;
  } else {
    state.password = password;
  }
}
