<script setup lang="ts">
</script>

<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style lang="scss">
:root {
}

.default-layout {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.default-layout :deep(.page) {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(3rem);
}
</style>
