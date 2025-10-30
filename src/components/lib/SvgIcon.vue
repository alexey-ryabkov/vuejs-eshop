<template>
  <svg aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script>
// :fill="fill" :color="color"
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    // prefix: {
    //   type: String,
    //   default: "icon",
    // },
    name: {
      type: String,
      required: true,
    },
    // color: {
    //   type: String,
    //   default: "none",
    // },
  },
  // ${props.prefix}-
  setup(props) {
    // const symbolId = computed(() => `#${props.name}`);
    return { symbolId: `#${props.name}` };
  },
});
</script>
