<template>
  <q-page padding>
    <div class="q-pa-md q-mt-lg">
      <q-bar dark>
        <p class="text-h4">Acceder</p>
      </q-bar>

      <q-form
        @submit="login"
        class="q-gutter-md"
      >
        <q-input
          type="password"
          v-model="form.password"
          label="Contraseña"
          :hint="loginHintComputed"
          lazy-rules
          filled
          :rules="[
            val => val && val.length > 0 || 'Campo requerido'
          ]"
        />

        <q-btn
          label="Iniciar sesión"
          type="submit"
          color="primary"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        password: null
      }
    }
  },
  computed: {
    loginHintComputed () {
      if (this.$store.state.auth.firstAccess) {
        return 'Establece tu nueva contraseña';
      }
      return 'Introduce tu contraseña';
    }
  },
  methods: {
    successLogin () {
      this.$store.commit("auth/SET_ACCESS", this.form.password);
      this.$q.notify({
        color: 'green-3',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Bienvenido a la APP'
      });
      this.$router.replace("/");
    },
    wrongLogin () {
      this.$store.commit("auth/SET_ACCESS", null);
      this.$q.notify({
        color: 'red-3',
        textColor: 'white',
        icon: 'error',
        message: 'Los datos son incorrectos'
      });
    },
    login () {
      if (this.$store.state.auth.firstAccess) {
        this.successLogin();
      } else {
        if (this.form.password === this.$store.state.auth.access) {
          this.successLogin();
        } else {
          this.wrongLogin();
        }
      }
    }
  }
}
</script>
