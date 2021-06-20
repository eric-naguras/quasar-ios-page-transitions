<template>
  <page>
    <page-header>
      <template #title>Tooltip Examples</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg text-h5">Top Arrows</div>
      <q-btn label="Top Arrow" color="primary" class="q-ma-lg">
        <tooltip arrow="top"> I am a tooltip </tooltip>
      </q-btn>

      <q-btn label="Top Left" color="primary" class="q-ma-lg">
        <tooltip arrow="top left"> I am a tooltip </tooltip>
      </q-btn>

      <q-btn label="Top Right" color="primary" class="q-ma-lg">
        <tooltip arrow="top right"> I am a tooltip </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Bottom Arrows</div>
      <q-btn label="Bottom Arrow" color="primary" class="q-ma-lg">
        <tooltip arrow="bottom" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Bottom Left" color="primary" class="q-ma-lg">
        <tooltip arrow="bottom left" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Bottom Right" color="primary" class="q-ma-lg">
        <tooltip arrow="bottom right" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Left & Right Arrows</div>
      <q-btn label="Left Arrow" color="primary" class="q-ma-lg">
        <tooltip arrow="left" anchor="center end" self="center start">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Right Left" color="primary" class="q-ma-lg">
        <tooltip arrow="right" anchor="center start" self="center end">
          I am a tooltip
        </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Programmatically Triggered</div>
      <q-btn @click="showTooltip = !showTooltip" label="Click to toggle tooltip" color="primary" class="q-ma-lg">
        <tooltip
          v-model="showTooltip"
          no-parent-event
          arrow="left"
          anchor="center end"
          self="center start"
        >
          I am a tooltip
        </tooltip>
      </q-btn>
    </page-body>
  </page>
</template>

<script>
import { ref } from "vue";
export default {
  components: {
    tooltip: require("src/components/Tooltip/Tooltip").default,
  },
  name: "Tooltip Examples",
  setup() {
    let showTooltip = ref(false);

    return {
      showTooltip,
    };
  },
};
</script>

<style></style>
