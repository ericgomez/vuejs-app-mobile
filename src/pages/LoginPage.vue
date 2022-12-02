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
  methods: {
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
