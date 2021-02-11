<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "@/layout/default.vue";
export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style lang="scss"></style>
