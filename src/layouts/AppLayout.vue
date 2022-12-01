<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="isLogged"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ appName}}
        </q-toolbar-title>

        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isLogged"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Control de cuentas
        </q-item-label>
        <q-item @click.native="home">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item @click.native="financialIncome">
          <q-item-section avatar>
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Ingresos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item @click.native="financialExpenses">
          <q-item-section avatar>
            <q-icon name="money_off" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gastos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item @click.native="financialReports">
          <q-item-section avatar>
            <q-icon name="insert_chart_outlined" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reportes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item @click.native="resetData">
          <q-item-section avatar>
            <q-icon name="settings_backup_restore" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Restablecer datos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item @click.native="logout">
          <q-item-section avatar>
            <q-icon name="arrow_right_alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Salir</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer elevated v-if="isLogged">
      <q-tabs>
        <q-route-tab
          label="Inicio"
          icon="home"
          to="/"
          exact
        />
        <q-route-tab
          label="Ingresos"
          icon="attach_money"
          to="/incomes"
          exact
        />
        <q-route-tab
          label="Gastos"
          icon="money_off"
          to="/expenses"
          exact
        />
        <q-route-tab
          label="Reportes"
          icon="insert_chart_outlined"
          to="/reports"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

const linksData = [
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  }
]

export default {
  name: 'AppLayout',
  components: {
  },
  mounted() {
    this.appName = process.env.APP_NAME;
    this.version = process.env.VERSION;
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      version: null,
      appName: null
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogged'])
  },
  methods: {
    home () {
      this.$router.push("/");
      this.leftDrawerOpen = false;
    },
    financialIncome () {
      this.$router.push({ name: 'Incomes' });
      this.leftDrawerOpen = false;
    },
    financialExpenses () {
      this.$router.push({ name: 'Expenses' });
      this.leftDrawerOpen = false;
    },
    financialReports () {
      this.$router.push({ name: 'Reports' });
      this.leftDrawerOpen = false;
    }
  }
}
</script>
