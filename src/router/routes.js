
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/AppLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', name: 'Login', component: () => import('pages/LoginPage.vue') },
      { path: 'incomes', name: 'Incomes', component: () => import('pages/Incomes/IncomesPage.vue') },
      { path: 'incomes/create', name: 'IncomesCreate', component: () => import('pages/Incomes/IncomesCreate.vue') },
      { path: 'incomes/:id', name: 'IncomesEdit', component: () => import('pages/Incomes/IncomesEdit.vue') },
      { path: 'expenses', name: "Expenses", component: () => import('pages/Expenses/ExpensesPage.vue') },
      { path: 'expenses/create', name: "ExpensesCreate", component: () => import('pages/Expenses/ExpensesCreate.vue') },
      { path: 'expenses/:id', name: "ExpensesEdit", component: () => import('pages/Expenses/ExpensesEdit.vue') },
      { path: 'reports', name: "Reports", component: () => import('pages/ReportsPage.vue') },
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
