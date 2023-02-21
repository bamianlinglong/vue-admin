<script setup>
import { RouterView } from 'vue-router'
import { _isMobile } from './utils/index'

console.log(_isMobile())

</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped>
</style>
