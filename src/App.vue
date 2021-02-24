<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/general/TheHeader";
import TheFooter from "@/components/general/TheFooter";

export default {
  name: 'App',
  components: {TheHeader, TheFooter}
}
</script>

<style>

</style>
