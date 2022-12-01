<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  mounted() {
    console.debug('HACIENDO PRUEBAS!!!!')
    console.log(JSON.stringify(this.user))
  },
  data() {
    return {
      user: {
        name: 'Eric',
        lastName: 'Gomez'
      }
    }
  }
}
</script>
