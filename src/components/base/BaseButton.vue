<template>
  <div :class="['btn', { disabled }]" :style="computedStyle">
    <button><slot>Кнопка</slot></button>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { hexToRgbA } from '@module/utils/hex-to-rgb'
import { contrast } from '@module/utils/contrast'
import { RGB } from '@module/types/rgb.type'

const props = defineProps({
  /**
   * Устанавливает фоновый цвет для кнопки
   */
  color: {
    type: String,
    default: '#aaa',
  },
  /**
   * Признак кнопки с обводкой и без фона
   */
  outline: {
    type: Boolean,
    default: false,
  },
  /**
   * Признак отключенной кнопки
   */
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click', 'mouseover', 'mouseleave'])

const textColor = computed(() => {
  const bgColor = props.color
  const rgba: RGB = hexToRgbA(bgColor)

  return contrast(rgba, [0, 0, 0]) > 4.5 ? 'black' : 'white'
})

const computedStyle = computed<Partial<CSSProperties>>(() => ({
  background: props.outline
    ? 'transparent'
    : props.color
    ? props.color
    : 'transparent',
  borderColor: props.outline ? props.color : 'transparent',
  color: props.outline ? props.color : textColor.value,
}))
</script>

<style lang="scss" scoped>
$step: 4px;

.btn {
  * {
    all: unset;
  }
  display: flex;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  padding: $step * 3 $step * 4;
  border-radius: $step;
  border: 1px solid;

  letter-spacing: 0.02em;

  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(65%);
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    user-select: none;
    pointer-events: none;
  }
}
</style>
