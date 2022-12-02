import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './auth';
import incomes from './incomes';
import expenses from './expenses';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/*
 * If not building with SSR mode, you can directly export the Store instantiation;
 * Como no estamos trabajando en una aplicacion SSR exportamos directamente el store
 */
export default new Vuex.Store({
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING,
  plugins: [createPersistedState()],
  modules: {
    auth,
    incomes,
    expenses
  }
});
