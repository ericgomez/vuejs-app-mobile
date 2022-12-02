// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ store, router }) => {
  router.beforeEach((to, from, next) => {
    const isLogged = store.getters['auth/isLogged'];
    if (!isLogged && to.path !== '/login') {
      return next({
        path: 'login'
      });
    }

    next();
  });
};
