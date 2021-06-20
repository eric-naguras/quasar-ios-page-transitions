<template>
  <page>
    <page-header>
      <template #title>Home</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <q-btn
          to="/home/child"
          label="Go to Child Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        >
          <tooltip :model-value="true" no-parent-event arrow="left center">
            I am a tooltip
          </tooltip>
        </q-btn>
        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          ratione atque asperiores, sunt veritatis consequuntur sit consectetur
          odit corrupti optio velit saepe laborum cupiditate, in neque nemo
          molestiae at error?
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>

export default {
  components: {
    tooltip: require("src/components/Tooltip/Tooltip").default,
  },
  name: "Home",
};
</script>
