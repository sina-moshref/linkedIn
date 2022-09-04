<template>
  <q-page>
    <Pheader />
    <Pbody />
  </q-page>
</template>

<script>
export default {
  components: {
    Pheader: require("components/HeaderP.vue").default,
    Pbody: require("components/BodyP.vue").default,
  },
};
</script>

<style lang="scss" scoped></style>
