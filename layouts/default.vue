<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showNavBar = ref(true);
const showFooter = ref(true);

watchEffect(() => {
  if (route.name === 'gamemode') {
    showNavBar.value = false;
    showFooter.value = false;
  } else {
    showNavBar.value = true;
    showFooter.value = true;
  }
});
</script>

<template>
  <div class="default-layout">
    <NavBar v-if="showNavBar" />
    <slot />
    <Footer v-if="showFooter" />
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
