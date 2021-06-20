<template>
  <q-tooltip class="tooltip" :class="`tooltip-arrow-${ arrowClass }`">
    <div class="tooltip-text bg-grey-10 text-body1 text-bold relative-position">
      <slot />
    </div>
    <div class="tooltip-arrow bg-grey-10 absolute"></div>
  </q-tooltip>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    arrow: {
      type: String,
      default: 'top'
    },
    duration: {
      type: Number,
      default: null
    }
  },
  setup(props) {
    const arrowClass = computed(() => {
      let arrowClassCorrected =  props.arrow.replace(' ', '-')
      const allowedClasses = [
        'top', 'top-left', 'top-right',
        'bottom', 'bottom-left', 'bottom-right',
        'left', 'left-top', 'left-bottom',
        'right', 'right-top', 'right-bottom'
      ]

      if (!allowedClasses.includes(arrowClassCorrected)) {
        console.error(`Value "${arrowClassCorrected}" not allowed for "arrow" prop.
        Used one of these (with or without dashes):`, allowedClasses)
        arrowClassCorrected = 'top'
      }

      return arrowClassCorrected
    })

    return {
      arrowClass
    }
  }
};
</script>

<style lang="scss">
$box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);

.tooltip {
  box-shadow: $box-shadow;
  border-radius: 10px;
  overflow: visible;
  background: transparent;
  padding: 0;

  &-text {
    z-index: 10;
    border-radius: 10px;
    padding: 20px;
  }
  &-arrow {
    z-index: 5;
    box-shadow: $box-shadow;
    width: 30px;
    height: 30px;
    transform: translateX(-50%) rotate(-45deg) skew(-20deg, -20deg);

    // top arrows
    [class*="tooltip-arrow-top"] & {
      top: 0;
    }
    .tooltip-arrow-top & {
      left: 50%;
    }

    .tooltip-arrow-top-left & {
      left: 20%;
    }

    .tooltip-arrow-top-right & {
      right: 0%;
    }

    // bottom arrows
    [class*="tooltip-arrow-bottom"] & {
      bottom: 0;
    }
    .tooltip-arrow-bottom & {
      left: 50%;
    }

    .tooltip-arrow-bottom-left & {
      left: 20%;
    }

    .tooltip-arrow-bottom-right & {
      right: 0%;
    }

     // left arrows
    [class*="tooltip-arrow-left"] & {
      transform: translateY(-50%) rotate(45deg) skew(-20deg, -20deg);
      left: 0%;
    }
    .tooltip-arrow-left & {
      top: 50%;
    }

     .tooltip-arrow-left-top & {
      top: 25%;
    }

     .tooltip-arrow-left-bottom & {
      bottom: -20%;
    }

    // right arrows
    [class*="tooltip-arrow-right"] & {
      transform: translateY(-50%) rotate(45deg) skew(-20deg, -20deg);
      right: 0%;
    }
    .tooltip-arrow-right & {
      top: 50%;
    }

     .tooltip-arrow-right-top & {
      top: 25%;
    }

     .tooltip-arrow-right-bottom & {
      bottom: -20%;
    }
  }
}
</style>
