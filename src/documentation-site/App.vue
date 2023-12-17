<script setup>

</script>

<template>
  <router-view />
</template>

<style>
body {
  display: initial;
  grid-template-columns: initial;
}

#app {
  display: grid;
  grid-template-columns: 204px 1fr min(45rem, calc(100% - 230px)) 1fr;
}

main {
  grid-column: 3;
}
</style>
