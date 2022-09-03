<template>
  <section class="body">
    <div class="body-container">
      <!-- left col -->
      <div class="body-left-col bodyC">
        <blc />
      </div>
      <!-- main col -->
      <div class="body-main-col bodyC">
        <bmc />
      </div>
      <!-- right col -->
      <div class="body-right-col bodyC">
        <brc />
      </div>
      <!-- send message btn -->
      <send-messsage />
    </div>
  </section>
</template>

<script>
import SendMesssage from "./body/SendMesssage.vue";
export default {
  components: {
    blc: require("components/body/BodyLeftCol.vue").default,
    bmc: require("components/body/BodyMainCol.vue").default,
    brc: require("components/body/BodyRightCol.vue").default,
    SendMesssage,
  },
};
</script>

<style lang="sass" scoped></style>
