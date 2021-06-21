<template>
  <page>
    <page-header>
      <template #title>Tooltip Examples</template>
    </page-header>
    <page-body>
      <!----------------------------------->

      <div class="q-pa-lg text-h5">Top Arrows</div>
      <q-btn label="Top Arrow" color="positive" class="q-ma-lg">
        <tooltip arrow="top"> I am a tooltip </tooltip>
      </q-btn>

      <q-btn label="Top Left" color="positive" class="q-ma-lg">
        <tooltip arrow="top left"> I am a tooltip </tooltip>
      </q-btn>

      <q-btn label="Top Right" color="positive" class="q-ma-lg">
        <tooltip arrow="top right"> I am a tooltip </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Bottom Arrows</div>
      <q-btn label="Bottom Arrow" color="positive" class="q-ma-lg">
        <tooltip arrow="bottom" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Bottom Left" color="positive" class="q-ma-lg">
        <tooltip arrow="bottom left" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Bottom Right" color="positive" class="q-ma-lg">
        <tooltip arrow="bottom right" anchor="top middle" self="bottom middle">
          I am a tooltip
        </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Left & Right Arrows</div>
      <q-btn label="Left Arrow" color="positive" class="q-ma-lg">
        <tooltip arrow="left" anchor="center end" self="center start">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Right Left" color="positive" class="q-ma-lg">
        <tooltip arrow="right" anchor="center start" self="center end">
          I am a tooltip
        </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Programmatically Triggered</div>
      <q-btn
        @click="showTooltip = !showTooltip"
        label="Click to toggle tooltip"
        color="positive"
        class="q-ma-lg"
      >
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

      <q-btn
        @click="showTooltipWithHide = true"
        label="Delayed tooltip"
        color="positive"
        class="q-ma-lg"
      >
        <tooltip
          v-model="showTooltipWithHide"
          no-parent-event
          :duration="2000"
          arrow="bottom"
        >
          I am a delayed tooltip
        </tooltip>
      </q-btn>

      <q-btn
        @click="showTooltipWithClose = true"
        label="Tooltip with close button"
        color="positive"
        class="q-ma-lg"
      >
        <tooltip
          v-model="showTooltipWithClose"
          no-parent-event
          arrow="bottom"
          closeable
        >
          I am a closeable tooltip
        </tooltip>
      </q-btn>

      <!----------------------------------->

      <div class="q-pa-lg text-h5">Custom Colors</div>

      <q-btn label="Red and Blue" color="positive" class="q-ma-lg">
        <tooltip arrow="top" bg-color="red" color="blue">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="White and Black" color="positive" class="q-ma-lg">
        <tooltip arrow="top" bg-color="white" color="black">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Info" color="positive" class="q-ma-lg">
        <tooltip arrow="top" bg-color="info" color="black">
          I am a tooltip
        </tooltip>
      </q-btn>

      <q-btn label="Negative" color="positive" class="q-ma-lg">
        <tooltip arrow="top" bg-color="negative" color="black">
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
    let showTooltipWithHide = ref(false);
    let showTooltipWithClose = ref(false);

    return {
      showTooltip,
      showTooltipWithHide,
      showTooltipWithClose,
    };
  },
};
</script>

<style></style>
