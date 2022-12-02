
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'Login', component: () => import('pages/LoginPage.vue') },
      { path: 'incomes', name: 'Incomes', component: () => import('pages/Incomes/IncomesPage.vue') },
      { path: 'incomes/create', name: 'IncomesCreate', component: () => import('pages/Incomes/IncomesCreate.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
