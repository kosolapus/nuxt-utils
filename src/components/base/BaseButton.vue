<template>
  <div class="btn" :style="computedStyle">
    <button><slot /></button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '#imports'

const props = defineProps({
  color: {
    type: String,
    default: '#aaa',
  },
})

defineEmits(['click', 'mouseover', 'mouseleave'])

const computedStyle = computed(
  () => `background-color:${props.color || 'transparent'}`
)
</script>

<style lang="scss" scoped>
.btn {
  * {
    all: unset;
  }
  display: flex;
  cursor: pointer;
  user-select: none;
}
</style>
