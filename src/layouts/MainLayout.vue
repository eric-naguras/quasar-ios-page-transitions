<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer bordered class="bg-white text-primary">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey">
        <q-route-tab to="/home" label="Home" icon="las la-home" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref, onMounted } from 'vue'
  export default {
    name: 'MainLayout',

    setup() {
      let themeColor = ref('light')
      let textSize = ref('md')
      onMounted(() => {
        console.log('mounted!')
        document.body.setAttribute('data-theme', themeColor.value)
        document.body.setAttribute('data-text-size', textSize.value)
      })
    }
  }
</script>
