<template>
  <div class="btn">
    <button>{{ aa }}</button>
  </div>
</template>

<script setup>
const aa = 'aa'
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
