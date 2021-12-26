<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>

<style lang="scss">
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position:absolute;
  }
  .v-enter-active, .v-leave-active{
    transition:all 0.3s ease;
  }
</style>
