<template>
  <div style="width: 100%">
    <main-header />
    <filter-btn />
    <infinity-scrill />
  </div>
</template>

<script>
import FilterBtn from "./MainColComponents/FilterBtn.vue";
import MainHeader from "./MainColComponents/MainHeader.vue";
import InfinityScrill from "./MainColComponents/infinityScroll.vue";

export default {
  components: {
    MainHeader,
    FilterBtn,
    InfinityScrill,
  },
};
</script>

<style lang="sass" scoped></style>
